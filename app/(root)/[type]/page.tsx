import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { getFileTypesParams } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Models } from "node-appwrite";

// Mapping des types vers des titres français lisibles
const typeLabels: { [key: string]: string } = {
  documents: "Documents",
  images: "Images",
  videos: "Vidéos",
  audios: "Audios",
  others: "Autres fichiers",
};

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  // Vérifier si le type est valide
  if (!type || !typeLabels[type]) {
    notFound();
  }

  const types = getFileTypesParams(type) as FileType[];
  const files = await getFiles({ types, searchText, sort });

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1">{typeLabels[type]}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Trier par:</p>

            <Sort />
          </div>
        </div>
      </section>

      {/* Render the files */}
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">Aucun fichier trouvé</p>
      )}
    </div>
  );
};

export default Page;
