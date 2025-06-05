import Image from "next/image";
import Link from "next/link";
import { Models } from "node-appwrite";

import ActionDropdown from "@/components/ActionDropdown";
import { FormattedDateTime } from "@/components/FormattedDateTime";
import { ContinueWatchingCard } from "@/components/modern-dashboard";
import { Thumbnail } from "@/components/Thumbnail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { convertFileSize, getUsageSummary } from "@/lib/utils";

const Dashboard = async () => {
  // Parallel requests
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpaceUsed(),
  ]);

  // Get usage summary
  const usageSummary = getUsageSummary(totalSpace);

  const user = await getCurrentUser();

  return (
    <div className="dashboard-container">
      <section className="md:col-span-2 lg:col-span-2 lg:col-start-1">
        {/* <Chart used={totalSpace.used} /> */}
        <Card className="border-0 bg-gradient-to-r from-blue to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="mb-4 border-0 bg-white/20 text-white">
                  RPDAD & UDCCAS
                </Badge>
                <h1 className="mb-2 text-balance text-3xl font-bold">
                  Bienvenue {user.fullName} sur le portail documentaire de
                  l&apos;UDCCAS et RPDAD
                </h1>

                {/* <Button className="text-white hover:bg-gray-100">
                  Rechercher
                </Button> */}
              </div>
              <div className="flex size-32 items-center justify-center rounded-full bg-white/10">
                <div className="size-16 rounded-full bg-white/20"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded file type summaries */}
        <ul className="dashboard-summary-list">
          {usageSummary.map((summary) => (
            <Link
              href={summary.url}
              key={summary.title}
              className="dashboard-summary-card"
            >
              <div className="space-y-4">
                <div className="flex justify-between gap-3">
                  <Image
                    src={summary.icon}
                    width={100}
                    height={100}
                    alt="uploaded image"
                    className="summary-type-icon"
                  />
                  <h4 className="summary-type-size">
                    {convertFileSize(summary.size) || 0}
                  </h4>
                </div>

                <h5 className="summary-type-title">{summary.title}</h5>
                <Separator className="bg-light-400" />
                <FormattedDateTime
                  date={summary.latestDate}
                  className="text-center"
                />
              </div>
            </Link>
          ))}
        </ul>
        {/* Continue Watching Section */}
        <div>
          <div className="mb-4 mt-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Actualités RPDAD & UDCCAS</h2>
            <Button variant="ghost" size="sm">
              Voir tout
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ContinueWatchingCard
              title="Nouvelle réglementation RPDAD 2024"
              category="RPDAD"
              instructor="Direction RPDAD"
              progress={75}
              image="/api/placeholder/300/200"
            />
            <ContinueWatchingCard
              title="Mise à jour procédures UDCCAS"
              category="UDCCAS"
              instructor="Service UDCCAS"
              progress={60}
              image="/api/placeholder/300/200"
            />
            <ContinueWatchingCard
              title="Formation sécurité informatique"
              category="FORMATION"
              instructor="IT Security Team"
              // progress={40}
              image="/api/placeholder/300/200"
            />
          </div>
        </div>
      </section>

      {/* Recent files uploaded */}
      <section className="dashboard-recent-files md:col-span-2  lg:col-span-1 lg:col-start-3">
        <h2 className="h3 xl:h2 text-light-100">Fichiers récents</h2>
        {files.documents.length > 0 ? (
          <ul className="mt-5 flex flex-col gap-5">
            {files.documents.map((file: Models.Document) => (
              <Link
                href={file.url}
                target="_blank"
                className="flex items-center gap-3"
                key={file.$id}
              >
                <Thumbnail
                  type={file.type}
                  extension={file.extension}
                  url={file.url}
                />

                <div className="recent-file-details">
                  <div className="flex flex-col gap-1">
                    <p className="recent-file-name">{file.name}</p>
                    <FormattedDateTime
                      date={file.$createdAt}
                      className="caption"
                    />
                  </div>
                  <ActionDropdown file={file} />
                </div>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="empty-list">Aucun fichier téléchargé</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
