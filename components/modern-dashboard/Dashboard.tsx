import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, LogOut, Plus, Search, Settings } from "lucide-react";
import { ContinueWatchingCard } from "./ContinueWatchingCard";
import { MentorCard } from "./MentorCard";
import { Sidebar } from "./Sidebar";
import { StatisticCard } from "./StatisticCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 flex size-8 items-center justify-center rounded-lg">
                  <span className="font-bold text-white">C</span>
                </div>
                <span className="text-lg font-semibold">Coursue</span>
              </div>

              <div className="relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your course..."
                  className="focus:ring-blue-500 w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="size-4" />
              </Button>
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  className="size-8 rounded-full"
                />
                <span className="font-medium">Jason Ranti</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Hero Section */}
              <Card className="border-0 bg-gradient-to-r from-blue to-purple-600 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="mb-4 border-0 bg-white/20 text-white">
                        ONLINE COURSE
                      </Badge>
                      <h1 className="mb-2 text-3xl font-bold">
                        Sharpen Your Skills with
                      </h1>
                      <h2 className="mb-6 text-3xl font-bold">
                        Professional Online Courses
                      </h2>
                      <Button className="text-blue-600 bg-white hover:bg-gray-100">
                        Join Now
                      </Button>
                    </div>
                    <div className="flex size-32 items-center justify-center rounded-full bg-white/10">
                      <div className="size-16 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Categories */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-lg bg-purple-100">
                    <svg
                      className="size-6 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="mb-1 text-sm text-gray-600">216 watched</p>
                  <h3 className="font-semibold">UI/UX Design</h3>
                </Card>

                <Card className="p-4 text-center">
                  <div className="bg-pink-100 mx-auto mb-3 flex size-12 items-center justify-center rounded-lg">
                    <svg
                      className="text-pink-600 size-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                    </svg>
                  </div>
                  <p className="mb-1 text-sm text-gray-600">316 watched</p>
                  <h3 className="font-semibold">Branding</h3>
                </Card>

                <Card className="p-4 text-center">
                  <div className="bg-blue-100 mx-auto mb-3 flex size-12 items-center justify-center rounded-lg">
                    <svg
                      className="text-blue-600 size-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <p className="mb-1 text-sm text-gray-600">427 watched</p>
                  <h3 className="font-semibold">Front End</h3>
                </Card>
              </div>

              {/* Continue Watching Section */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    Actualités RPDAD & UDCCAS
                  </h2>
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
                    image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop"
                  />
                  <ContinueWatchingCard
                    title="Mise à jour procédures UDCCAS"
                    category="UDCCAS"
                    instructor="Service UDCCAS"
                    progress={60}
                    image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
                  />
                  <ContinueWatchingCard
                    title="Formation sécurité informatique"
                    category="FORMATION"
                    instructor="IT Security Team"
                    progress={40}
                    image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop"
                  />
                </div>
              </div>

              {/* Your Lesson Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Vos Leçons</CardTitle>
                    <Button variant="ghost" size="sm">
                      Voir tout
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="Mentor"
                        className="size-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-sm font-medium">
                            Padhang Satio
                          </span>
                          <span className="text-xs text-gray-500">
                            27/4/2024
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          UI/UX DESIGN
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          Comprendre l&apos;UI/UX Design
                        </p>
                        <p className="text-sm text-gray-500">TYPE: DESK</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <div className="size-6 rounded-full border-2 border-gray-300"></div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar Content */}
            <div className="space-y-6">
              {/* Statistics */}
              <StatisticCard />

              {/* Your Mentor */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Vos Mentors</h2>
                  <Button variant="ghost" size="sm">
                    <Plus className="size-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <MentorCard
                    name="Padhang Satio"
                    role="Mentor"
                    avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    isFollowing={true}
                  />
                  <MentorCard
                    name="Zakir Hossain"
                    role="Mentor"
                    avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
                    isFollowing={true}
                  />
                  <MentorCard
                    name="Leonardo Samuel"
                    role="Mentor"
                    avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                    isFollowing={false}
                  />
                </div>

                <Button variant="ghost" className="mt-4 w-full">
                  Voir Tout
                </Button>
              </div>

              {/* Settings and Logout at bottom */}
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings className="size-4" />
                  Paramètres
                </Button>
                <Button
                  variant="ghost"
                  className="text-red-600 hover:text-red-700 w-full justify-start gap-2"
                >
                  <LogOut className="size-4" />
                  Déconnexion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
