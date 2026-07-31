import React from 'react';
import { Building2, User, ShieldAlert, PlusCircle, RefreshCw, Activity } from 'lucide-react';
import { resetToDefaultData } from '../../utils/storage';

export const Header = ({ currentView, onViewChange, onOpenReportModal, issueCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-blue-500/50">
              <Building2 className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-950"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">CityPulse</h1>
                <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400 border border-blue-500/20 shadow-sm">
                  MUNICIPAL TECH
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Civic Issue & Rapid Response Platform</p>
            </div>
          </div>

          {/* Center App Switcher (Citizen View vs Municipal Admin) */}
          <div className="flex items-center rounded-xl bg-slate-900/80 p-1 border border-slate-700/50 shadow-inner backdrop-blur-sm">
            <button
              onClick={() => onViewChange('citizen')}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                currentView === 'citizen'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20 scale-100'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 scale-95'
              }`}
            >
              <User className="h-3.5 w-3.5" />
              <span>Citizen Portal</span>
            </button>
            <button
              onClick={() => onViewChange('admin')}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                currentView === 'admin'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20 scale-100'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 scale-95'
              }`}
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Municipal Admin</span>
              {issueCount > 0 && (
                <span className="ml-1 rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] text-white border border-white/10 shadow-inner">
                  {issueCount}
                </span>
              )}
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {currentView === 'citizen' && (
              <button
                onClick={onOpenReportModal}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 hover:from-emerald-400 hover:to-teal-500 transition-all active:scale-95"
              >
                <PlusCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Report Issue</span>
              </button>
            )}

            <button
              onClick={resetToDefaultData}
              title="Reset sample data"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
