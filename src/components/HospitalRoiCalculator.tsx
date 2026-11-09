import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Calendar, 
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface HospitalRoiCalculatorProps {
  onOpenScheduleModal: () => void;
}

export const HospitalRoiCalculator: React.FC<HospitalRoiCalculatorProps> = ({ onOpenScheduleModal }) => {
  const [monthlyShifts, setMonthlyShifts] = useState<number>(25);
  const [shiftRate, setShiftRate] = useState<number>(2600);
  const [facilityTier, setFacilityTier] = useState<string>('secondary');

  const calculations = useMemo(() => {
    const monthlySurgeSpend = monthlyShifts * shiftRate;
    
    // Administrative hours saved (eliminating manual nurse phone calling, credentials chasing, timesheet sorting)
    const adminHoursSaved = Math.round(monthlyShifts * 2.2);

    return {
      monthlySurgeSpend,
      adminHoursSaved,
    };
  }, [monthlyShifts, shiftRate]);

  return (
    <section id="hospital-roi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4F3] text-[#0F6B8A] border border-[#D8E3E3]">
            <Calculator className="w-3.5 h-3.5 text-[#0F6B8A]" />
            <span>Census Surge & Relief Economics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A4A] tracking-tight font-display">
            Model your hospital's census surge & relief capacity.
          </h2>
          <p className="text-base sm:text-lg text-[#56717C]">
            When bed occupancy surges beyond your core staff's capacity, deploy pre-verified per-diem relief without fixed overhead or recruitment lag. Designed to support—not replace—your permanent clinical team.
          </p>
        </div>

        <div className="bg-[#123A4A] rounded-[14px] p-6 sm:p-10 shadow-2xl border border-white/10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Facility Size Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Facility Classification
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'tertiary', label: 'Tertiary (Level 3)' },
                  { id: 'secondary', label: 'Secondary (Level 2)' },
                  { id: 'primary', label: 'Primary / Clinic' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setFacilityTier(tier.id);
                      if (tier.id === 'tertiary') setMonthlyShifts(45);
                      if (tier.id === 'secondary') setMonthlyShifts(25);
                      if (tier.id === 'primary') setMonthlyShifts(10);
                    }}
                    className={`py-2 px-3 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
                      facilityTier === tier.id
                        ? 'bg-[#0F6B8A] text-white border-sky-400 shadow-sm'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Surge Shifts */}
            <div className="space-y-2 bg-white/5 p-4 rounded-[12px] border border-white/10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-200">
                  Estimated Monthly Surge or Relief Shifts Needed:
                </label>
                <span className="text-lg font-bold text-[#00AEFD] font-display">
                  {monthlyShifts} surge shifts / mo
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={monthlyShifts}
                onChange={(e) => setMonthlyShifts(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#00AEFD]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>5 shifts (Leave Cover)</span>
                <span>25 shifts (Moderate Surge)</span>
                <span>80+ shifts (Peak Census)</span>
              </div>
            </div>

            {/* Slider 2: Shift Rate */}
            <div className="space-y-2 bg-white/5 p-4 rounded-[12px] border border-white/10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-200">
                  Estimated Average Rate Per 8-Hr Bedside Shift:
                </label>
                <span className="text-lg font-bold text-[#00AEFD] font-display">
                  ₱{shiftRate.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1600"
                max="4500"
                step="100"
                value={shiftRate}
                onChange={(e) => setShiftRate(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#00AEFD]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₱1,600 (Ward)</span>
                <span>₱2,600 (ER/ICU)</span>
                <span>₱4,500+ (Specialty/Night)</span>
              </div>
            </div>

            <div className="text-xs text-slate-300 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#EF7158] shrink-0" />
              <span>Supplemental relief buffer activated on-demand. Designed to support—not replace—your permanent clinical team.</span>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-white/5 p-6 sm:p-8 rounded-[12px] border border-white/10 relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-sky-200 border border-white/15">
                <Sparkles className="w-3 h-3" />
                ELASTIC SURGE BUFFER
              </span>
            </div>

            <div className="space-y-6">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Estimated Monthly Surge Shift Spend
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#00AEFD] font-display">
                    ₱{Math.round(calculations.monthlySurgeSpend).toLocaleString()}
                  </div>
                  <span className="text-sm font-medium text-slate-300">/ month during peaks</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Elastic per-diem disbursement for {monthlyShifts} surge relief shifts. Zero fixed overhead when core staff handles normal census.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-[10px] bg-black/20 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#00AEFD]" />
                    <span>Coordination Saved</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {calculations.adminHoursSaved} hrs / mo
                  </div>
                  <div className="text-[10px] text-slate-400">No manual phone trees or emergency Viber scrambling</div>
                </div>

                <div className="p-3.5 rounded-[10px] bg-black/20 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1D8A5A]" />
                    <span>Core Staff Protection</span>
                  </div>
                  <div className="text-xl font-bold text-[#1D8A5A]">
                    Zero Forced Doubles
                  </div>
                  <div className="text-[10px] text-slate-400">Protects nurses from burnout & keeps beds open</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold text-white bg-[#EF7158] hover:bg-[#C9452C] shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Discuss surge staffing at PHAPi exhibit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
