import { 
  FileText, 
  MessageSquare, 
  ThumbsUp, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  Clock,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Blogs",
      value: "24",
      icon: <FileText className="text-blue-500" />,
      change: "+4 this month",
    },
    {
      title: "Total Likes",
      value: "1.2k",
      icon: <ThumbsUp className="text-rose-500" />,
      change: "+12% from last week",
    },
    {
      title: "Comments",
      value: "482",
      icon: <MessageSquare className="text-emerald-500" />,
      change: "+28 today",
    },
    {
      title: "Total Views",
      value: "18.4k",
      icon: <TrendingUp className="text-amber-500" />,
      change: "+1.2k this week",
    },
  ];

  const recentBlogs = [
    { title: "Mastering Next.js 15: The Ultimate Guide", date: "2 hours ago", status: "Published" },
    { title: "Tailwind CSS Best Practices for Scalable UIs", date: "5 hours ago", status: "Published" },
    { title: "Building a Blog with Typescript and Shadcn", date: "1 day ago", status: "Draft" },
    { title: "The Future of Web Development in 2026", date: "3 days ago", status: "Published" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your blog.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (stat &&
          <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-muted rounded-lg">
                {stat.icon}
              </div>
              <ArrowUpRight className="text-muted-foreground size-4" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Blogs */}
        <div className="col-span-4 rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-6 border-b flex items-center justify-between">
            <h3 className="font-semibold text-lg">Recent Activities</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="p-0">
            {recentBlogs.map((blog, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/50 transition-colors">
                <div className="space-y-1">
                  <p className="font-medium">{blog.title}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                  blog.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {blog.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Tips */}
        <div className="col-span-3 rounded-xl border bg-primary text-primary-foreground p-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Ready to share something new?</h3>
            <p className="text-primary-foreground/80 text-sm">Create a new blog post and engage with your readers. You have 2 drafts waiting for review.</p>
          </div>
          <div className="space-y-3 mt-6">
            <Button variant="secondary" className="w-full justify-start gap-2">
              <PlusCircle size={18} />
              Create New Blog
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Users size={18} />
              Manage Users
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
