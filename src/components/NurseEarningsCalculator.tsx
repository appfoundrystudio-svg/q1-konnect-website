import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Wallet, 
  TrendingUp, 
  Sparkles, 
  UserPlus, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface NurseEarningsCalculatorProps {
  onOpenNurseModal: () => void;
}

interface SpecialtyRate {
  id: string;
  name: string;
  avgRate: number;
}

export const NurseEarningsCalculator: React.FC<NurseEarningsCalculatorProps> = ({ onOpenNurseModal }) => {
  const specialties: SpecialtyRate[] = [
    { id: 'ward', name: 'General Ward / Med-Surg', avgRate: 2100 },
    { id: 'er', name: 'Emergency Room (ER)', avgRate: 2600 },
    { id: 'icu', name: 'Intensive Care Unit (ICU)', avgRate: 3000 },
    { id: 'hemo', name: 'Hemodialysis Unit', avgRate: 2750 },
    { id: 'or', name: 'Operating Room / PACU', avgRate: 3300 },
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('icu');
  const [shiftsPerWeek, setShiftsPerWeek] = useState<number>(3);

  const activeSpecialty = specialties.find((s) => s.id === selectedSpecialty) || specialties[2];

  const calculations = useMemo(() => {
    const weeklyEarnings = shiftsPerWeek * activeSpecialty.avgRate;
    const monthlyEarnings = weeklyEarnings * 4;
    const annualEarnings = monthlyEarnings * 12;

    return {
      rate: activeSpecialty.avgRate,
      weeklyEarnings,
      monthlyEarnings,
      annualEarnings,
    };
  }, [shiftsPerWeek, activeSpecialty]);

  return (
    <section id="nurse-earnings" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Nurse Supplemental Income Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Estimate Your Monthly Take-Home from Flexible Shifts.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Whether you want to pick up 1 shift on your day off or take on regular per-diem hospital blocks, 
            see how much you can earn with zero middlemen cuts.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Specialty Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Select Your Clinical Specialty:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specialties.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecialty(spec.id)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedSpecialty === spec.id
                        ? 'bg-sky-50 text-sky-900 border-sky-400 ring-2 ring-sky-400/20 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">{spec.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Avg. ₱{spec.avgRate.toLocaleString()} / shift
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Shifts Per Week Slider */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700">
                  Reliever Shifts You Wish to Work Per Week:
                </label>
                <span className="text-xl font-black text-sky-700 font-heading">
                  {shiftsPerWeek} {shiftsPerWeek === 1 ? 'shift' : 'shifts'} / wk
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={shiftsPerWeek}
                onChange={(e) => setShiftsPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>1 Shift (Casual)</span>
                <span>3 Shifts (Recommended)</span>
                <span>5 Shifts (Full Per-Diem)</span>
              </div>
            </div>

            {/* Perks bullet */}
            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant payout directly to GCash, Maya, or Philippine bank account</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Night differential & hazard pay bonuses included in rate breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero deduction or platform commission taken from nurse wages</span>
              </div>
            </div>

          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-800 text-white relative">
            <div className="space-y-6">
              
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  <Sparkles className="w-3 h-3" />
                  PROJECTED MONTHLY EXTRA
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300 font-heading mt-2">
                  ₱{calculations.monthlyEarnings.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Based on {shiftsPerWeek} {activeSpecialty.name} shifts per week @ ₱{calculations.rate.toLocaleString()} / shift.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Wallet className="w-3.5 h-3.5 text-sky-400" />
                    <span>Weekly Take-Home</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    ₱{calculations.weeklyEarnings.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">Paid out weekly</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Annual Supplemental</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    ₱{calculations.annualEarnings.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">Debt-free extra savings</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenNurseModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-sky-400 to-teal-300 hover:from-sky-300 hover:to-teal-200 shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <UserPlus className="w-4 h-4 text-slate-900" />
                  <span>Join Nurse Pool & Start Claiming Shifts</span>
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
