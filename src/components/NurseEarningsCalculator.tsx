import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Wallet, 
  TrendingUp, 
  Sparkles, 
  UserPlus, 
  ArrowRight,
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
    <section id="nurse-earnings" className="py-20 bg-white border-t border-[#D8E3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4F3] text-[#0F6B8A] border border-[#D8E3E3]">
            <Calculator className="w-3.5 h-3.5 text-[#0F6B8A]" />
            <span>Nurse Supplemental Income Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A4A] tracking-tight font-display">
            Estimate your monthly take-home from flexible shifts.
          </h2>
          <p className="text-base sm:text-lg text-[#56717C]">
            Whether you plan to pick up 1 shift on your scheduled day off or take on regular per-diem 
            hospital blocks, see how much you can earn with transparent shift rates.
          </p>
        </div>

        <div className="bg-[#EEF4F3] rounded-[14px] p-6 sm:p-10 shadow-sm border border-[#D8E3E3] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
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
                    className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
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
                  Target Reliever Shifts Per Week:
                </label>
                <span className="text-xl font-black text-sky-600 font-heading">
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
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
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
                <span>Fast payout directly to GCash, Maya, or any Philippine bank account</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Shift compensation shown upfront with zero surprise deductions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Priority notification access for pre-registered nurses upon launch</span>
              </div>
            </div>

          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-[#123A4A] p-6 sm:p-8 rounded-[14px] border border-white/10 text-white relative">
            <div className="space-y-6">
              
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-sky-200 border border-white/15">
                  <Sparkles className="w-3 h-3" />
                  PROJECTED MONTHLY SUPPLEMENTAL
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#00AEFD] font-display mt-2">
                  ₱{calculations.monthlyEarnings.toLocaleString()}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Based on {shiftsPerWeek} {activeSpecialty.name} shifts/week @ ₱{calculations.rate.toLocaleString()} benchmark.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-[10px] bg-black/20 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <Wallet className="w-3.5 h-3.5 text-[#00AEFD]" />
                    <span>Weekly Take-Home</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    ₱{calculations.weeklyEarnings.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">Paid out directly</div>
                </div>

                <div className="p-3.5 rounded-[10px] bg-black/20 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#1D8A5A]" />
                    <span>Annual Potential</span>
                  </div>
                  <div className="text-xl font-bold text-[#1D8A5A]">
                    ₱{calculations.annualEarnings.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">Supplemental earnings</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenNurseModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-sky-600 shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <UserPlus className="w-4 h-4 text-white" />
                  <span>Pre-register to claim shifts at launch</span>
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
