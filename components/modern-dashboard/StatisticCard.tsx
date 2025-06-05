import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const StatisticCard = () => {
  const stats = [
    { period: "1-10 Aug", value: 20 },
    { period: "11-20 Aug", value: 40 },
    { period: "21-30 Aug", value: 60 },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Statistiques</CardTitle>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {/* User Avatar and Greeting */}
        <div className="mb-6 text-center">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              alt="Profile"
              className="mx-auto mb-3 size-20 rounded-full"
            />
            <div className="bg-blue-600 absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full">
              <span className="text-xs text-white">👋</span>
            </div>
          </div>
          <h3 className="mb-1 text-lg font-semibold">Bonjour Jason 🔥</h3>
          <p className="text-sm text-gray-500">
            Complétez vos objectifs aujourd&apos;hui!
          </p>
        </div>

        {/* Progress Stats */}
        <div className="space-y-4">
          <div className="mb-4 text-center">
            <div className="text-2xl font-bold">60</div>
          </div>

          {/* Chart representation */}
          <div className="mb-4 flex h-20 items-end justify-center gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div
                  className="bg-blue-600 rounded-t"
                  style={{
                    height: `${stat.value}%`,
                    width: "12px",
                  }}
                />
                <span className="origin-bottom -rotate-45 text-xs text-gray-500">
                  {stat.period}
                </span>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span>40</span>
                <span>20</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
