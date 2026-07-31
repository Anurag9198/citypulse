import React from 'react';

export const StatsCard = ({ title, value, subtext, icon: Icon, color = 'blue', trend }) => {
  const colorMap = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-700/50 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl hover:bg-slate-800/60">
      {/* Subtle Glow Overlay */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"></div>
      
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</p>
          <p className="mt-2 text-2xl font-bold text-slate-100 tracking-tight">{value}</p>
          {subtext && <p className="mt-1 text-xs text-slate-400">{subtext}</p>}
        </div>
        <div className={`p-3 rounded-xl border ${colorMap[color] || colorMap.blue}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      {trend && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>{trend.label}</span>
          <span className={trend.positive ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
            {trend.value}
          </span>
        </div>
      )}
    </div>
  );
};
