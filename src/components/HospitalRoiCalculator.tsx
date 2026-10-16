import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Calendar, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface HospitalRoiCalculatorProps {
  onOpenScheduleModal: () => void;
}

export const HospitalRoiCalculator: React.FC<HospitalRoiCalculatorProps> = ({ onOpenScheduleModal }) => {
  const [monthlyShifts, setMonthlyShifts] = useState<number>(45);
  const [shiftRate, setShiftRate] = useState<number>(2600);
  const [facilityTier, setFacilityTier] = useState<string>('secondary');

  const calculations = useMemo(() => {
    const totalMonthlyShiftSpend = monthlyShifts * shiftRate;
    const annualShiftSpend = totalMonthlyShiftSpend * 12;
    
    // Administrative hours saved (eliminating manual nurse phone calling, credentials chasing, timesheet sorting)
    const adminHoursSaved = Math.round(monthlyShifts * 2.2);

    return {
      totalMonthlyShiftSpend,
      annualShiftSpend,
      adminHoursSaved,
    };
  }, [monthlyShifts, shiftRate]);

  return (
    <section id="hospital-roi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Clinical Shift Economics Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Benchmark Your Facility's Shift Management Economics.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Traditional staffing intermediaries introduce variable markups and heavy manual coordination. 
            Explore your shift volume budget and see the administrative hours recovered with direct clinical infrastructure.
          </p>
        </div>

        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Facility Size Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
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
                      if (tier.id === 'tertiary') setMonthlyShifts(80);
                      if (tier.id === 'secondary') setMonthlyShifts(45);
                      if (tier.id === 'primary') setMonthlyShifts(20);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                      facilityTier === tier.id
                        ? 'bg-sky-500 text-white border-sky-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Open Shifts */}
            <div className="space-y-2 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">
                  Estimated Monthly Open or Reliever Shifts:
                </label>
                <span className="text-lg font-black text-sky-400 font-heading">
                  {monthlyShifts} shifts / mo
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={monthlyShifts}
                onChange={(e) => setMonthlyShifts(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>5 shifts (Clinic)</span>
                <span>100 shifts</span>
                <span>200+ shifts (Hospital Surge)</span>
              </div>
            </div>

            {/* Slider 2: Shift Rate */}
            <div className="space-y-2 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">
                  Estimated Average Rate Per 8-Hr Bedside Shift:
                </label>
                <span className="text-lg font-black text-sky-400 font-heading">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₱1,600 (Ward)</span>
                <span>₱2,600 (ER/ICU)</span>
                <span>₱4,500+ (Specialty/Night)</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Financial estimates modeled on standard Philippine healthcare per-diem benchmarks.</span>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Sparkles className="w-3 h-3" />
                MANAGED SHIFT SPEND
              </span>
            </div>

            <div className="space-y-6">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Projected Annual Bedside Shift Spend
                </p>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white font-heading mt-1">
                  ₱{Math.round(calculations.annualShiftSpend).toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Transparent shift disbursement for {monthlyShifts} bedside shifts/month @ ₱{shiftRate.toLocaleString()}/shift.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Coordination Saved</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {calculations.adminHoursSaved} hrs / mo
                  </div>
                  <div className="text-[10px] text-slate-500">Automated dispatch replaces manual phone trees</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Shift Economics</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    Transparent
                  </div>
                  <div className="text-[10px] text-slate-500">Direct hospital-to-nurse shift rates</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 shadow-lg shadow-sky-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-slate-900" />
                  <span>Discuss Staffing Model at PHAPi Exhibit</span>
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
