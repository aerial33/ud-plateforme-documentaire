import { RpdadLogo } from "@/graphics/LogoRpdad/logo";
import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="to-blue-800 relative hidden w-1/2 items-center justify-center overflow-hidden bg-gradient-to-br from-brand via-brand p-10 lg:flex xl:w-2/5">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="bg-blue-300/20 absolute -left-20 top-1/4 size-60 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 size-32 rounded-full bg-white/15 blur-xl"></div>

          {/* Formes géométriques */}
          <div className="absolute right-20 top-20 size-8 rotate-45 bg-white/20"></div>
          <div className="bg-blue-200/30 absolute bottom-32 left-16 size-6 rotate-12"></div>
          <div className="absolute left-10 top-1/2 size-4 rotate-45 bg-white/25"></div>
        </div>

        <div className="relative z-10 flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          {/* Section icône avec animation */}
          <div className="flex justify-center">
            <div className="group relative">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl transition-all duration-300 group-hover:bg-white/30"></div>
            </div>
          </div>

          {/* Contenu textuel amélioré */}
          <div className="space-y-6 text-center text-white">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
                Bienvenue sur la
                <span className="to-blue-100 block bg-gradient-to-r from-white bg-clip-text text-transparent">
                  plateforme documentaire
                </span>
                <span className="text-blue-100 block text-2xl font-semibold lg:text-3xl">
                  RPDAD | UDCCAS
                </span>
              </h1>
            </div>

            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

            <p className="text-blue-100 text-lg leading-relaxed">
              Accédez à vos documents de manière
              <span className="font-medium text-white"> sécurisée</span> et
              <span className="font-medium text-white"> efficace</span>.
            </p>

            {/* Statistiques ou points forts */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">Sécurisé</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Accessible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-blue-200 text-sm">Documents</div>
              </div>
            </div>
          </div>

          {/* Logo RPDAD avec effet */}
          <div className="flex justify-center">
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-white/10 blur-xl transition-all duration-300 group-hover:bg-white/20"></div>
              <div className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <RpdadLogo className="h-auto" width={280} height={280} />
              </div>
            </div>
          </div>
        </div>

        {/* Effet de particules subtil */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/3 size-1 animate-pulse rounded-full bg-white"></div>
          <div
            className="absolute right-1/3 top-1/2 size-1 animate-pulse rounded-full bg-white"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 size-1 animate-pulse rounded-full bg-white"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
