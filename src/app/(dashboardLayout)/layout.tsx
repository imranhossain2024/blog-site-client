import { Sidebar } from '@/components/layout/Sidebar';

export default function DashboardLayout({
  children,
  admin,
  user,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {

  const userInfo = {
    role: "admin"
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 bg-muted/30">{userInfo.role === "admin" ? admin : user}</main>
    </div>
  );
}
