import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-container">
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="border-0 bg-gradient-to-r from-blue to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-white/20 text-4xl font-bold">
                  404
                </div>
              </div>

              <h1 className="mb-4 text-2xl font-bold">Page non trouvée</h1>

              <p className="mb-6 text-white/90">
                Désolé, la page que vous recherchez n&apos;existe pas ou a été
                déplacée.
              </p>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-white text-blue hover:bg-gray-100"
                >
                  <Link href="/">Retour à l&apos;accueil</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/documents">Voir les documents</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Plate-forme documentaire RPDAD & UDCCAS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
