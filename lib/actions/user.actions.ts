"use server";

import { avatarPlaceholderUrl } from "@/constants";
import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ID, Query } from "node-appwrite";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
  organisation,
}: {
  fullName: string;
  email: string;
  organisation?: string;
}) => {
  const existingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({ email });
  if (!accountId) throw new Error("Failed to send an OTP");

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar: avatarPlaceholderUrl,
        accountId,
        organisation,
      }
    );
  }

  return parseStringify({ accountId });
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createSession(accountId, password);

    // Configuration des cookies adaptée à la production
    const isProduction = process.env.NODE_ENV === "production";

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: isProduction ? "none" : "strict",
      secure: isProduction,
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });

    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    console.error("Error in verifySecret:", {
      error: error instanceof Error ? error.message : error,
      accountId,
      timestamp: new Date().toISOString(),
    });
    handleError(error, "Failed to verify OTP");
  }
};

export const getCurrentUser = async () => {
  try {
    const { databases, account } = await createSessionClient();

    const result = await account.get();

    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", result.$id)]
    );

    if (user.total <= 0) {
      console.log("User not found in database for accountId:", result.$id);
      return null;
    }

    return parseStringify(user.documents[0]);
  } catch (error) {
    // Log détaillé pour le débogage en production
    console.error("Error in getCurrentUser:", {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });

    // Retourner null explicitement au lieu d'undefined
    return null;
  }
};

export const signOutUser = async () => {
  const { account } = await createSessionClient();

  try {
    await account.deleteSession("current");
    (await cookies()).delete("appwrite-session");
  } catch (error) {
    handleError(error, "Failed to sign out user");
  } finally {
    redirect("/connexion");
  }
};

export const signInUser = async ({ email }: { email: string }) => {
  try {
    const existingUser = await getUserByEmail(email);

    // User exists, send OTP
    if (existingUser) {
      const accountId = await sendEmailOTP({ email });
      if (!accountId) {
        throw new Error("Failed to send OTP");
      }
      return parseStringify({ accountId: existingUser.accountId });
    }

    console.log("User not found for email:", email);
    return parseStringify({ accountId: null, error: "User not found" });
  } catch (error) {
    console.error("Error in signInUser:", {
      error: error instanceof Error ? error.message : error,
      email,
      timestamp: new Date().toISOString(),
    });
    handleError(error, "Failed to sign in user");
  }
};
