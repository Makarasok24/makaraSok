import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            <span className="block text-3xl md:text-4xl text-slate-300 font-medium mb-2">Hello, I'm {PERSONAL_INFO.name}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {PERSONAL_INFO.role}
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={`#${SectionId.PROJECTS}`}>
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={`#${SectionId.CONTACT}`}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        {/* Visual Element (Mock Code Window) */}
        <div className="flex-1 w-full max-w-lg relative hidden md:block">
           <div className="relative rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <div className="font-mono text-sm space-y-2">
               <div className="flex">
                 <span className="text-pink-500 mr-2">const</span>
                 <span className="text-blue-400">developer</span>
                 <span className="text-white mr-2"> = </span>
                 <span className="text-yellow-300">{"{"}</span>
               </div>
               <div className="pl-4">
                 <span className="text-indigo-300">name:</span> <span className="text-green-400">"{PERSONAL_INFO.name}"</span>,
               </div>
               <div className="pl-4">
                 <span className="text-indigo-300">role:</span> <span className="text-green-400">"{PERSONAL_INFO.role}"</span>,
               </div>
               <div className="pl-4">
                 <span className="text-indigo-300">focus:</span> <span className="text-green-400">"Front-End"</span>,
               </div>
               <div className="pl-4">
                  <span className="text-indigo-300">passionate:</span> <span className="text-purple-400">true</span>
               </div>
               <div className="text-yellow-300">{"}"}</div>
               <div className="flex pt-2">
                 <span className="text-blue-400">developer</span>
                 <span className="text-white">.</span>
                 <span className="text-yellow-200">code</span>
                 <span className="text-white">()</span>
                 <span className="text-white">;</span>
                 <span className="ml-2 w-2 h-5 bg-indigo-500 animate-pulse inline-block align-middle"></span>
               </div>
             </div>
           </div>
           
           {/* Decorative Elements behind code block */}
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-lg -z-10 opacity-50" />
           <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-slate-700 rounded-lg -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
