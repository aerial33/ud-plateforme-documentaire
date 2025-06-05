import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  let currentUser;

  try {
    currentUser = await getCurrentUser();
  } catch (error) {
    console.error("Error getting current user in layout:", error);
    redirect("/connexion");
  }

  if (!currentUser) {
    console.log("No current user found, redirecting to login");
    redirect("/connexion");
  }

  // Vérifier que l'utilisateur a les propriétés nécessaires
  if (!currentUser.$id || !currentUser.accountId) {
    console.error("User missing required properties:", {
      hasId: !!currentUser.$id,
      hasAccountId: !!currentUser.accountId,
    });
    redirect("/connexion");
  }

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />

      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
      </section>

      <Toaster />
    </main>
  );
};
export default Layout;
