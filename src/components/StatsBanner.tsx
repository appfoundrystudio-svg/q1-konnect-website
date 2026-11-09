import React from 'react';
import { ShieldCheck, Zap, DollarSign, HeartHandshake, QrCode } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const pillars = [
    {
      label: 'Staffing Model',
      value: 'Direct Connect',
      desc: 'Direct hospital-to-nurse dispatch',
      icon: DollarSign,
      color: 'text-[#0F6B8A]',
      bgColor: 'bg-[#EEF4F3]',
    },
    {
      label: 'License Compliance',
      value: 'PRC Verified',
      desc: 'Mandatory clinical registry check',
      icon: ShieldCheck,
      color: 'text-[#1D8A5A]',
      bgColor: 'bg-[#EEF4F3]',
    },
    {
      label: 'Rapid Dispatch',
      value: '< 20 Mins',
      desc: 'Engineered emergency shift alert target',
      icon: Zap,
      color: 'text-[#C9452C]',
      bgColor: 'bg-[#EEF4F3]',
    },
    {
      label: 'Shift Compensation',
      value: 'Transparent Rates',
      desc: 'Upfront agreed pay & fast wallet payouts',
      icon: HeartHandshake,
      color: 'text-[#0F6B8A]',
      bgColor: 'bg-[#EEF4F3]',
    },
    {
      label: 'Timekeeping',
      value: 'Geofenced QR',
      desc: 'Tamper-proof station clock-in',
      icon: QrCode,
      color: 'text-[#123A4A]',
      bgColor: 'bg-[#EEF4F3]',
    },
  ];

  return (
    <section className="relative z-10 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[14px] shadow-xl border border-[#D8E3E3] p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#D8E3E3]">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.label} 
                className={`flex flex-col items-center text-center px-4 ${index > 0 ? 'pt-4 lg:pt-0' : ''}`}
              >
                <div className={`p-2.5 rounded-full ${item.bgColor} ${item.color} mb-3`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#123A4A] font-display tracking-tight">
                  {item.value}
                </div>
                <div className="text-[11px] font-bold text-[#123A4A] mt-1 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#56717C] mt-0.5">
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
