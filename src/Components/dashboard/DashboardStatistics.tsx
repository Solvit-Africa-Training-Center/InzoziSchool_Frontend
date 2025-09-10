import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts';
import StatisticsCard from '../cards/StatisticsCard';

const profileData = [
  { name: 'Jan', value: 50 },
  { name: 'Mar', value: 80 },
  { name: 'May', value: 120 },
  { name: 'Jul', value: 150 },
  { name: 'Sep', value: 200 },
  { name: 'Nov', value: 170 },
];

const applicationsData = [
  { name: 'Jan', value: 2 },
  { name: 'Mar', value: 7 },
  { name: 'May', value: 10 },
  { name: 'Jul', value: 12 },
  { name: 'Sep', value: 15 },
  { name: 'Nov', value: 20 },
];

const admissionsData = [
  { year: 2012, value: 5 },
  { year: 2014, value: 8 },
  { year: 2016, value: 12 },
  { year: 2018, value: 15 },
  { year: 2020, value: 18 },
  { year: 2022, value: 22 },
];

const DashboardStatistics: React.FC = () => (
    <div className="p-6 mt-10">
      <h2 className="text-xl font-bold text-[#282C34] mb-6 font-poppins">Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Visits */}
<StatisticsCard title="Profile Visits">
  <ResponsiveContainer width="100%" height={150}>
    <LineChart data={profileData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
      <XAxis dataKey="name" stroke="#6B7280" />
      <YAxis stroke="#6B7280" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
</StatisticsCard>

{/* Applications */}
<StatisticsCard title="Applications">
  <ResponsiveContainer width="100%" height={150}>
    <LineChart data={applicationsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
      <XAxis dataKey="name" stroke="#6B7280" />
      <YAxis stroke="#6B7280" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
</StatisticsCard>

<StatisticsCard title="Admissions">
  <ResponsiveContainer width="100%" height={150}>
    <BarChart data={admissionsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
      <XAxis
        dataKey="year"
        stroke="#6B7280"
        tickFormatter={(tick) => tick.toString()} 
      />
      <YAxis stroke="#6B7280" />
      <Tooltip />
      <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</StatisticsCard>

      </div>
    </div>
  );

export default DashboardStatistics;
