import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { DeepDiveModalType } from '../types';

interface VideoTeaserProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
}

export const VideoTeaser: React.FC<VideoTeaserProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          onClick={() => onOpenModal('video')}
          className="group cursor-pointer rounded-3xl card-minimal-dark p-8 sm:p-14 text-center relative overflow-hidden border border-white/10 hover:border-sky-500/50 transition-all duration-500 shadow-2xl"
        >
          {/* Subtle background mesh glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/10 via-transparent to-blue-600/10 opacity-70 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-sky-400 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Video Walkthrough</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-sky-300 transition-colors">
              See the System in Action.
            </h3>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Watch our 2-minute video demonstrations explaining how hospital command centers broadcast shifts 
              and how registered nurses claim and complete verified shifts with instant QR clock-in.
            </p>

            {/* Play Button Trigger */}
            <div className="pt-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center shadow-xl shadow-sky-500/30 group-hover:scale-110 group-hover:bg-sky-400 transition-all duration-300">
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </div>
            </div>

            <p className="text-xs font-mono text-slate-400 tracking-wider uppercase pt-2">
              Click to launch video theater (Hospital & Nurse Walkthroughs)
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
