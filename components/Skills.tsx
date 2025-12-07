import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { Cpu, Layout, Server, Database, Cloud, Wrench, Users, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  
  const getIcon = (cat: string) => {
      switch(cat) {
          case 'frontend': return <Layout className="w-5 h-5" />;
          case 'backend': return <Server className="w-5 h-5" />;
          case 'devops': return <Cloud className="w-5 h-5" />;
          case 'soft skills': return <Users className="w-5 h-5" />;
          case 'languages': return <Globe className="w-5 h-5" />;
          default: return <Wrench className="w-5 h-5" />;
      }
  };

  return (
    <section id={SectionId.SKILLS} className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and expertise levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-indigo-600/10 text-indigo-400">
                    {getIcon(category)}
                </div>
                <h3 className="text-xl font-semibold text-white capitalize">{category}</h3>
              </div>
              
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
