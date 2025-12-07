import React from 'react';
import { SectionId } from '../types';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-slate-400">Academic background and qualifications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors duration-300 flex flex-col sm:flex-row gap-6 items-start">
              <div className="p-4 rounded-full bg-indigo-600/10 text-indigo-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
                <h4 className="text-lg text-indigo-400 font-medium mb-2">{edu.degree}</h4>
                <p className="text-slate-500 text-sm font-medium mb-4 uppercase tracking-wider">{edu.period}</p>
                {edu.description && (
                   <p className="text-slate-400 leading-relaxed">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
