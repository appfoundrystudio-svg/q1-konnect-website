import React from 'react';
import { Clock, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const StatTicker: React.FC = () => {
  const metrics = [
    {
      value: 'Direct Connect',
      label: 'Hospital-to-Nurse Network',
      desc: 'Broadcast shifts in 60s without middleman delays',
      icon: Zap,
      color: 'text-q1-network-blue',
    },
    {
      value: '100% Pre-Check',
      label: 'PRC License Verified',
      desc: 'Automated clinical credential validation',
      icon: ShieldCheck,
      color: 'text-q1-matched-green',
    },
    {
      value: '< 20 Mins',
      label: 'Urgent Dispatch Target',
      desc: 'Push notifications to verified bedside radius',
      icon: Clock,
      color: 'text-[#C9452C]',
    },
    {
      value: 'Transparent',
      label: 'Agreed Shift Compensation',
      desc: 'Upfront rates visible before shifts are accepted',
      icon: HeartHandshake,
      color: 'text-q1-network-blue',
    },
  ];

  return (
    <section className="py-12 border-y border-[#D8E3E3] bg-[#EEF4F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.label} className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <IconComp className={`w-4 h-4 ${item.color}`} />
                  <span className="text-2xl sm:text-3xl font-extrabold text-q1-deep-teal font-display">
                    {item.value}
                  </span>
                </div>
                <p className="text-xs font-bold text-q1-deep-teal uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-[12px] text-q1-muted-text">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
