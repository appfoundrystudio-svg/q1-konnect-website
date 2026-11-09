import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { DeepDiveModalType } from '../types';

interface VideoTeaserProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
}

export const VideoTeaser: React.FC<VideoTeaserProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-[#EEF4F3] text-q1-deep-teal relative border-t border-[#D8E3E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          onClick={() => onOpenModal('video')}
          className="group cursor-pointer rounded-[14px] bg-q1-deep-teal text-white p-8 sm:p-14 text-center relative overflow-hidden border border-white/10 hover:border-q1-logo-sky/50 transition-all duration-500 shadow-xl"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-q1-network-blue/30 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-q1-logo-sky border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Video Walkthrough</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-q1-logo-sky transition-colors">
              See the system in action.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Watch our 2-minute video demonstrations showing how hospital command centers broadcast shifts 
              and how registered nurses claim and complete verified shifts with instant QR clock-in.
            </p>

            {/* Official Q1 Play Button Trigger */}
            <div className="pt-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/brand/devices/q1-button_light.svg" 
                  alt="Play Video" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            <p className="text-xs font-mono text-slate-300 tracking-wider uppercase pt-2">
              Launch video theater (hospital & nurse walkthroughs)
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
