import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Play } from "lucide-react";
import React from "react";

interface ContinueWatchingCardProps {
  title: string;
  category: string;
  instructor: string;
  progress?: number;
  image: string;
}

export const ContinueWatchingCard: React.FC<ContinueWatchingCardProps> = ({
  title,
  category,
  instructor,
  image,
}) => {
  // Choisir une image en fonction de la catégorie
  const getImageByCategory = (category: string, defaultImage: string) => {
    const categoryImages = {
      RPDAD:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      UDCCAS:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      FORMATION:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop",
    };
    return (
      categoryImages[category as keyof typeof categoryImages] || defaultImage
    );
  };

  const imageUrl = getImageByCategory(category, image);

  return (
    <Card className="overflow-hidden transition-shadow ">
      <div className="relative">
        <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
          <div className="flex size-12 items-center justify-center rounded-full bg-white/90">
            <Play className="ml-1 size-5 text-gray-800" />
          </div>
        </div>
        <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2 transition-colors hover:bg-white">
          <Heart className="size-4 text-gray-600" />
        </button>
        <Badge
          className="absolute bottom-3 left-3 text-xs"
          variant={
            category === "RPDAD"
              ? "default"
              : category === "UDCCAS"
                ? "secondary"
                : "outline"
          }
        >
          {category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-semibold">{title}</h3>

        <div className="mb-3 flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=24&h=24&fit=crop&crop=face"
            alt={instructor}
            className="size-6 rounded-full"
          />
          <span className="text-xs text-gray-600">{instructor}</span>
        </div>
      </CardContent>
    </Card>
  );
};
