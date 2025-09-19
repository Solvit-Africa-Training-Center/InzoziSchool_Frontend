import { FiTrendingUp, FiCheckCircle, FiUsers, FiFileText, FiBarChart } from 'react-icons/fi';

interface StatCard {
  id: number;
  title: string;
  value: string | number;
  color: string;
  icon: string; // key to pick which icon
  secondaryIcon?: string; // optional small icon
}

interface StatsCardsProps {
  stats: StatCard[];
}

export default function AnalyticCard({ stats }: StatsCardsProps) {
  // map icon string to real component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: Record<string, any> = {
    trending: FiTrendingUp,
    check: FiCheckCircle,
    users: FiUsers,
    file: FiFileText,
    bar: FiBarChart,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = icons[stat.icon];

        return (
          <div key={stat.id} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center'
              >
                <Icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
            <div>
            <h3 className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
