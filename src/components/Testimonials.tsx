import React from 'react';
import { Star, Quote, Building2, Stethoscope } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Emergency shift call-outs used to throw our entire ward into chaos. With Q1 Konnect, we post an open ICU shift and have a verified, PRC-compliant nurse confirmed in under 20 minutes. It's transformed our staffing resilience.",
      name: "Dr. Evelyn M. Ramos, MD, FPCHA",
      role: "Chief Nursing & Medical Operations Director",
      facility: "Metro Health Medical Center",
      type: 'hospital',
      rating: 5,
    },
    {
      quote: "I was on the verge of leaving bedside nursing due to mandatory overtime and burnout. Q1 Konnect gave me my schedule back. I work 3 shifts a week on my own terms and earn more take-home pay with instant digital payouts.",
      name: "Maria Cecilia Tolentino, RN",
      role: "Critical Care (ICU) Specialist",
      facility: "Independent Reliever Nurse",
      type: 'nurse',
      rating: 5,
    },
    {
      quote: "Traditional staffing agencies charged us 35% markups with zero visibility into nurse credentials. Q1 Konnect eliminated the middlemen. We saved over ₱1.2 Million in agency fees while gaining full QR attendance audit trails.",
      name: "Atty. Rafael D. Santos",
      role: "Director of Human Capital & Hospital Operations",
      facility: "Provincial Care Hospital Network",
      type: 'hospital',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
            Social Proof & Proven Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Trusted by Hospital Directors & Bedside Nurses Alike.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Hear directly from the healthcare leadership and clinical professionals 
            redefining workforce management across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.name}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.type === 'hospital' 
                      ? 'bg-teal-100 text-teal-800' 
                      : 'bg-sky-100 text-sky-800'
                  }`}>
                    {item.type === 'hospital' ? <Building2 className="w-3 h-3" /> : <Stethoscope className="w-3 h-3" />}
                    {item.type === 'hospital' ? 'Hospital Partner' : 'Registered Nurse'}
                  </span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <p className="text-sm font-bold text-slate-900 font-heading">{item.name}</p>
                <p className="text-xs text-slate-600">{item.role}</p>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">{item.facility}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
