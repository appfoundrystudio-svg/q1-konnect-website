import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, DollarSign, Users } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      label: 'Shift Fill Rate',
      value: '98.4%',
      desc: 'Industry-leading reliability',
      icon: CheckCircle2,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      label: 'Rapid Response',
      value: '< 20 Mins',
      desc: 'Urgent shift match speed',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      label: 'PRC Compliance',
      value: '100%',
      desc: 'Pre-vetted clinical licenses',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Hospital Cost Savings',
      value: '35-40%',
      desc: 'Zero traditional agency markups',
      icon: DollarSign,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
    },
    {
      label: 'Active Clinical Pool',
      value: '1,500+',
      desc: 'ICU, ER, OR, Ward & Dialysis RNs',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="relative z-10 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200/90 p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center text-center px-4 ${index > 0 ? 'pt-4 lg:pt-0' : ''}`}
              >
                <div className={`p-2.5 rounded-xl ${stat.bgColor} ${stat.color} mb-3`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
