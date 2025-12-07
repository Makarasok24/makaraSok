import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400">My professional journey and career milestones.</p>
        </div>

        <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0" />

            {EXPERIENCE.map((job, index) => (
                <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-indigo-600 -translate-x-1/2 flex items-center justify-center z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg hover:border-indigo-500/30 transition-colors">
                            <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full mb-3">
                                {job.period}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                            <h4 className="text-lg text-slate-300 mb-4 flex items-center gap-2 justify-start md:justify-inherit">
                                <Briefcase className="w-4 h-4 text-slate-500" />
                                {job.company}
                            </h4>
                            <ul className="space-y-2">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed">
                                        • {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;