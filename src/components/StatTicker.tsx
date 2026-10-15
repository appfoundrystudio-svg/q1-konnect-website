import React from 'react';
import { DollarSign, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const StatTicker: React.FC = () => {
  const metrics = [
    {
      value: '35–40%',
      label: 'Agency Markup Eliminated',
      desc: 'Direct hospital-to-nurse shift economy',
      icon: DollarSign,
      color: 'text-sky-400',
    },
    {
      value: '100%',
      label: 'PRC License Verified',
      desc: 'Automated clinical credential validation',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
    {
      value: '< 20 Mins',
      label: 'Urgent Dispatch Target',
      desc: 'Push notifications to verified bedside radius',
      icon: Zap,
      color: 'text-amber-400',
    },
    {
      value: '0%',
      label: 'Nurse Fee Deductions',
      desc: 'Advertised shift pay goes 100% to the nurse',
      icon: HeartHandshake,
      color: 'text-blue-400',
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.label} className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <IconComp className={`w-4 h-4 ${item.color}`} />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {item.value}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-[11px] text-slate-500">
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
