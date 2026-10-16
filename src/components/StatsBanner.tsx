import React from 'react';
import { ShieldCheck, Zap, DollarSign, HeartHandshake, QrCode } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const pillars = [
    {
      label: 'Staffing Model',
      value: 'Direct Connect',
      desc: 'Direct hospital-to-nurse dispatch',
      icon: DollarSign,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
    },
    {
      label: 'License Compliance',
      value: '100%',
      desc: 'Mandatory PRC license verification',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Rapid Dispatch',
      value: '< 20 Mins',
      desc: 'Engineered emergency shift alert target',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      label: 'Shift Compensation',
      value: 'Transparent Rates',
      desc: 'Upfront agreed pay & fast wallet payouts',
      icon: HeartHandshake,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Timekeeping',
      value: 'Geofenced QR',
      desc: 'Tamper-proof station clock-in',
      icon: QrCode,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="relative z-10 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200/90 p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.label} 
                className={`flex flex-col items-center text-center px-4 ${index > 0 ? 'pt-4 lg:pt-0' : ''}`}
              >
                <div className={`p-2.5 rounded-xl ${item.bgColor} ${item.color} mb-3`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-950 font-heading tracking-tight">
                  {item.value}
                </div>
                <div className="text-[11px] font-bold text-slate-800 mt-1 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
