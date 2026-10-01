import React, { useState, useEffect } from 'react';
import { Audience } from './types/landing';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { HospitalSection } from './components/HospitalSection';
import { HospitalRoiCalculator } from './components/HospitalRoiCalculator';
import { NurseSection } from './components/NurseSection';
import { NurseEarningsCalculator } from './components/NurseEarningsCalculator';
import { AppShowcase } from './components/AppShowcase';
import { HowItWorks } from './components/HowItWorks';
import { ComplianceTrust } from './components/ComplianceTrust';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScheduleMeetingModal } from './components/ScheduleMeetingModal';
import { NurseSignupModal } from './components/NurseSignupModal';
import { AdminLeadsDrawer } from './components/AdminLeadsDrawer';
import { getHospitalLeads, getNurseLeads } from './services/leadStorage';
import { Building2, Stethoscope, ArrowRight, Calendar, UserPlus } from 'lucide-react';

export const App: React.FC = () => {
  const [currentAudience, setCurrentAudience] = useState<Audience>('hospital');
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const [adminDrawerOpen, setAdminDrawerOpen] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  const refreshLeadCount = () => {
    const total = getHospitalLeads().length + getNurseLeads().length;
    setLeadCount(total);
  };

  useEffect(() => {
    refreshLeadCount();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        currentAudience={currentAudience}
        onAudienceChange={setCurrentAudience}
        onOpenScheduleModal={() => setScheduleModalOpen(true)}
        onOpenNurseModal={() => setNurseModalOpen(true)}
        onOpenAdminDrawer={() => setAdminDrawerOpen(true)}
        leadCount={leadCount}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          currentAudience={currentAudience}
          onAudienceChange={setCurrentAudience}
          onOpenScheduleModal={() => setScheduleModalOpen(true)}
          onOpenNurseModal={() => setNurseModalOpen(true)}
        />

        {/* Stats Banner */}
        <StatsBanner />

        {/* Audience-prioritized view */}
        {currentAudience === 'hospital' ? (
          <>
            <HospitalSection onOpenScheduleModal={() => setScheduleModalOpen(true)} />
            <HospitalRoiCalculator onOpenScheduleModal={() => setScheduleModalOpen(true)} />
            <AppShowcase />
            <HowItWorks 
              onOpenScheduleModal={() => setScheduleModalOpen(true)}
              onOpenNurseModal={() => setNurseModalOpen(true)}
            />
            <NurseSection onOpenNurseModal={() => setNurseModalOpen(true)} />
            <NurseEarningsCalculator onOpenNurseModal={() => setNurseModalOpen(true)} />
          </>
        ) : (
          <>
            <NurseSection onOpenNurseModal={() => setNurseModalOpen(true)} />
            <NurseEarningsCalculator onOpenNurseModal={() => setNurseModalOpen(true)} />
            <AppShowcase />
            <HowItWorks 
              onOpenScheduleModal={() => setScheduleModalOpen(true)}
              onOpenNurseModal={() => setNurseModalOpen(true)}
            />
            <HospitalSection onOpenScheduleModal={() => setScheduleModalOpen(true)} />
            <HospitalRoiCalculator onOpenScheduleModal={() => setScheduleModalOpen(true)} />
          </>
        )}

        {/* Shared Trust & Credential Section */}
        <ComplianceTrust />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-teal-900 via-slate-900 to-sky-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-teal-200 border border-white/20">
              Get Started with Q1 Konnect
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
              Ready to Transform Healthcare Workforce Delivery?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Join forward-thinking hospitals strengthening clinical coverage and nurses taking 
              pride in flexible, high-earning per-diem careers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setScheduleModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Building2 className="w-5 h-5" />
                <span>Hospital: Schedule Partnership Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setNurseModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Stethoscope className="w-5 h-5 text-sky-200" />
                <span>Nurse: Join the Talent Pool</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenScheduleModal={() => setScheduleModalOpen(true)}
        onOpenNurseModal={() => setNurseModalOpen(true)}
      />

      {/* Modals & Drawers */}
      <ScheduleMeetingModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        onLeadSubmitted={refreshLeadCount}
      />

      <NurseSignupModal
        isOpen={nurseModalOpen}
        onClose={() => setNurseModalOpen(false)}
        onLeadSubmitted={refreshLeadCount}
      />

      <AdminLeadsDrawer
        isOpen={adminDrawerOpen}
        onClose={() => setAdminDrawerOpen(false)}
        onDataChanged={refreshLeadCount}
      />

      {/* Floating Action Button for Quick Admin Inspection */}
      {leadCount > 0 && (
        <button
          onClick={() => setAdminDrawerOpen(true)}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-2xl hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{leadCount} Leads Captured</span>
        </button>
      )}

    </div>
  );
};
