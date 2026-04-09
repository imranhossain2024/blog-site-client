import Link from 'next/link';
import React from 'react';

function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <h1>Practice Layout</h1>
      <nav className="flex gap-4 m-8">
        <Link className="hover:underline" href="/development">
          Development
        </Link>
        <Link className="hover:underline" href="/marketing">
          Marketing
        </Link>
        <Link className="hover:underline" href="/marketing/settings">
          Settings
        </Link>
        <Link className="hover:underline" href="/sales">
          Sales
        </Link>
        <Link className="hover:underline" href="/testing">
          Testing
        </Link>
      </nav>
      <div className="flex bg-slate-900 w-[600px] h-[300px] rounded-xl overflow-hidden shadow-2xl border-4 border-slate-800">
        <div className="flex-1 border-r-2 border-slate-700 flex items-center justify-center p-4 bg-indigo-900/30 text-white font-medium text-center">
          {marketingSlot}
        </div>
        <div className="flex-1 flex items-center justify-center p-4 bg-emerald-900/30 text-white font-medium text-center">
          {salesSlot}
        </div>
      </div>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Main Content Slot</h2>
        {children}
      </div>
    </div>
  );
}

export default PracticeLayout;
