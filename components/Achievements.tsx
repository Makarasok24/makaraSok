import React from 'react';
import { SectionId, Achievement } from '../types';
import { ACHIEVEMENTS } from '../constants';
import { Award, BookOpen, HeartHandshake, Trophy, Calendar } from 'lucide-react';

const Achievements: React.FC = () => {
  const getIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'scholarship':
        return <Award className="w-8 h-8" />;
      case 'education':
        return <BookOpen className="w-8 h-8" />;
      case 'volunteer':
        return <HeartHandshake className="w-8 h-8" />;
      case 'project':
        return <Trophy className="w-8 h-8" />;
      default:
        return <Award className="w-8 h-8" />;
    }
  };

  const getColorClass = (category: Achievement['category']) => {
    switch (category) {
      case 'scholarship':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'education':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'volunteer':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'project':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default:
        return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
    }
  };

  return (
    <section id={SectionId.ACHIEVEMENTS} className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Highlights of my academic journey, community contributions, and professional milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className={`p-3 rounded-lg border ${getColorClass(item.category)} shrink-0`}>
                  {getIcon(item.category)}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs font-medium text-slate-500 bg-slate-800 px-2 py-1 rounded-md shrink-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  
                  <p className="text-indigo-400 text-sm font-medium mb-3">
                    {item.organization}
                  </p>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;