import Link from 'next/link';
import React from 'react';

function PracticeLayout({ children }: { children: React.ReactNode }) {
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
      </nav>
      <div className="border-2 border-red-500 w-90 h-90 bg-black text-white">{children}</div>
    </div>
  );
}

export default PracticeLayout;
