import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Home,
  LogOut,
  Mail,
  Settings,
  Users,
} from "lucide-react";

export const Sidebar = () => {
  const navigationItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Mail, label: "Inbox" },
    { icon: BookOpen, label: "Lesson" },
    { icon: Calendar, label: "Task" },
    { icon: Users, label: "Group" },
  ];

  const friends = [
    {
      name: "Bagus Mahode",
      status: "Friend",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=32&h=32&fit=crop&crop=face",
    },
    {
      name: "Sir Dandy",
      status: "Old Friend",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=32&h=32&fit=crop&crop=face",
    },
    {
      name: "Jhon Tosan",
      status: "Friend",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face",
    },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Overview Section */}
      <div className="p-6">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          APERÇU
        </h3>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                item.active
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <item.icon className="size-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Friends Section */}
      <div className="px-6 pb-6">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          AMIS
        </h3>
        <div className="space-y-3">
          {friends.map((friend) => (
            <div key={friend.name} className="flex items-center gap-3">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="size-8 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">
                  {friend.name}
                </p>
                <p className="text-xs text-gray-500">{friend.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Section at bottom */}
      <div className="mt-auto space-y-2 p-6">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          PARAMÈTRES
        </h3>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-gray-600"
        >
          <Settings className="size-4" />
          Paramètres
        </Button>
        <Button
          variant="ghost"
          className="text-red-600 hover:text-red-700 w-full justify-start gap-3"
        >
          <LogOut className="size-4" />
          Déconnexion
        </Button>
      </div>
    </div>
  );
};
