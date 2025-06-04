"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import OtpModal from "@/components/OTPModal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createAccount, signInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FormType = "connexion" | "inscription";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z
      .string()
      .email({ message: "Veuillez saisir une adresse e-mail valide." }),
    fullName:
      formType === "inscription"
        ? z
            .string()
            .min(2, {
              message: "Le nom complet doit contenir au moins 2 caractères.",
            })
            .max(50, {
              message: "Le nom complet ne peut pas dépasser 50 caractères.",
            })
        : z.string().optional(),
    organisation:
      formType === "inscription"
        ? z.enum(["RPDAD", "UDCCAS"], {
            errorMap: () => ({
              message: "Veuillez sélectionner une organisation.",
            }),
          })
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState(null);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organisation: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const user =
        type === "inscription"
          ? await createAccount({
              fullName: values.fullName || "",
              email: values.email,
              organisation: values.organisation,
            })
          : await signInUser({ email: values.email });

      setAccountId(user.accountId);
    } catch {
      setErrorMessage("La création du compte a échoué. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title">
            {type === "connexion" ? "Connexion" : "Inscription"}
          </h1>
          {type === "inscription" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">
                      Nom complet
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Entrez votre nom complet"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}

          {type === "inscription" && (
            <FormField
              control={form.control}
              name="organisation"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">
                      Organisation
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="shad-input">
                          <SelectValue placeholder="Sélectionnez une organisation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="RPDAD">RPDAD</SelectItem>
                          <SelectItem value="UDCCAS">UDCCAS</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </div>
                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Email</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Entrez votre email"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="form-submit-button"
            disabled={isLoading}
          >
            {type === "connexion" ? "Connexion" : "Inscription"}

            {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />
            )}
          </Button>

          {errorMessage && <p className="error-message">*{errorMessage}</p>}

          <div className="body-2 flex justify-center">
            <p className="text-light-100">
              {type === "connexion"
                ? "Vous n'avez pas de compte ?"
                : "Vous avez déjà un compte ?"}
            </p>
            <Link
              href={type === "connexion" ? "/inscription" : "/connexion"}
              className="ml-1 font-medium text-brand"
            >
              {" "}
              {type === "connexion" ? "Inscription" : "Connexion"}
            </Link>
          </div>
        </form>
      </Form>

      {accountId && (
        <OtpModal email={form.getValues("email")} accountId={accountId} />
      )}
    </>
  );
};

export default AuthForm;
