import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface MentorCardProps {
  name: string;
  role: string;
  avatar: string;
  isFollowing: boolean;
}

export const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  avatar,
  isFollowing,
}) => {
  // Choisir une image en fonction du nom du mentor
  const getAvatarByName = (name: string, defaultAvatar: string) => {
    const avatarImages = {
      "Padhang Satio":
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      "Zakir Hossain":
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      "Leonardo Samuel":
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    };
    return avatarImages[name as keyof typeof avatarImages] || defaultAvatar;
  };

  const avatarUrl = getAvatarByName(name, avatar);

  return (
    <Card className="border-0 bg-gray-50/50 shadow-none transition-colors hover:bg-gray-100/50">
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={avatarUrl} alt={name} className="size-10 rounded-full" />
            <div className="bg-green-500 absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-white"></div>
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-medium text-gray-900">
              {name}
            </h4>
            <p className="text-xs text-gray-500">{role}</p>
          </div>

          <Button
            size="sm"
            variant={isFollowing ? "default" : "outline"}
            className={`h-7 px-3 py-1 text-xs ${
              isFollowing
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            {isFollowing ? "Suivi" : "Suivre"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
