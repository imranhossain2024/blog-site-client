"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LogOut, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ href, icon, label, active }: SidebarItemProps) => {
  return (
    <Link href={href}>
      <span
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
          active ? "bg-accent text-accent-foreground" : "text-muted-foreground"
        )}
      >
        {icon}
        {label}
      </span>
    </Link>
  );
};

export function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      label: "User Dashboard",
      icon: <FileText size={20} />,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Admin Dashboard",
      icon: <PlusCircle size={20} />,
      href: "/admin-dashboard",
      active: pathname === "/admin-dashboard",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform">
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              B
            </div>
            <span>NextBlog</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <nav className="flex flex-col gap-1">
            <p className="px-2 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Main Menu
            </p>
            {routes.map((route) => (
              <SidebarItem
                key={route.href}
                href={route.href}
                icon={route.icon}
                label={route.label}
                active={route.active}
              />
            ))}
          </nav>
        </div>

        <div className="mt-auto px-4 py-4 border-t border-muted">
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => console.log("Logout functionality")}
          >
            <LogOut size={20} />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
