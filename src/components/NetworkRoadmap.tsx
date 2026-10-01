import React from 'react';
import { Layers, Building2, Stethoscope, Award, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface NetworkRoadmapProps {
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
}

export const NetworkRoadmap: React.FC<NetworkRoadmapProps> = ({
  onOpenScheduleModal,
  onOpenNurseModal,
}) => {
  const phases = [
    {
      phase: 'Phase 1: Present',
      badge: 'Active Now',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      title: 'Dual-Sided Network Seeding',
      desc: 'A workforce marketplace requires strong commitments from both ends. We are currently onboarding Pioneer Hospital Partners to define demand, while pre-registering verified PRC nurses so both parties are ready from day one.',
      bullets: [
        'Engaging pioneering private hospitals & clinics',
        'Pre-verifying PRC licenses & clinical specialties',
        'Refining shift parameters based on nurse & hospital feedback',
      ],
      active: true,
    },
    {
      phase: 'Phase 2: November 2026',
      badge: 'Industry Showcase',
      badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      title: 'PHAPi Convention Exhibition',
      desc: 'Presenting our live working prototype and MVP directly to hospital owners, Medical Directors, and Chief Nursing Officers across the Philippines at the annual national convention.',
      bullets: [
        'Open walk-in prototype demos at our exhibit booth',
        'Signing preliminary Memorandums of Agreement (MoAs)',
        'Welcoming additional healthcare facilities to the network',
      ],
      active: false,
    },
    {
      phase: 'Phase 3: Post-Convention',
      badge: 'Controlled Rollout',
      badgeColor: 'bg-slate-700/50 text-slate-300 border-slate-600',
      title: 'Controlled Pilot Shift Deployment',
      desc: 'Launching live shift matching in designated high-acuity departments (ICU, ER, Hemodialysis, General Ward) with our pre-registered nurse pool before broad public rollout.',
      bullets: [
        'Live geofenced QR attendance & timekeeping in pilot wards',
        'Immediate shift payout reconciliation to digital wallets',
        'Iterative feature updates guided by pioneer partner input',
      ],
      active: false,
    },
  ];

  return (
    <section id="network-roadmap" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Marketplace Architecture & Rollout</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
            Our Phased Network Strategy.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A healthcare staffing network only succeeds when both hospitals and nurses trust the platform. 
            Here is how we are building that critical foundation before going live.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((item) => (
            <div
              key={item.phase}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                item.active 
                  ? 'bg-slate-900 border-sky-500/50 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/20' 
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.phase}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                {item.active ? (
                  <div className="flex gap-2">
                    <button
                      onClick={onOpenScheduleModal}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 text-center transition-colors cursor-pointer"
                    >
                      Hospital Partner Inquiry
                    </button>
                    <button
                      onClick={onOpenNurseModal}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 text-center transition-colors cursor-pointer border border-slate-700"
                    >
                      Pre-Register as Nurse
                    </button>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500 font-semibold block text-center">
                    Scheduled Milestone
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
