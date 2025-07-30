import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  ChevronDown, 
  Settings, 
  Monitor, 
  Smartphone, 
  Search as SearchIcon, 
  MessageSquare, 
  Headphones, 
  Users, 
  User, 
  HelpCircle, 
  LogOut,
  BarChart3,
  TrendingUp,
  DollarSign,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const sidebarItems = [
  { title: "Dashboard", icon: Monitor, active: true, path: "/dashboard" },
  { title: "Web Development", icon: Monitor },
  { title: "App Development", icon: Smartphone },
  { title: "SEO Services", icon: SearchIcon },
  { title: "SMM Services", icon: MessageSquare },
  { title: "Technical Support", icon: Headphones },
  { title: "CRM", icon: Users },
];

const bottomSidebarItems = [
  { title: "Profile", icon: User, path: "/profile" },
  { title: "Help & Support", icon: HelpCircle, path: "/help-support" },
  { title: "Settings", icon: Settings },
  { title: "Log Out", icon: LogOut },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Projects",
      value: "23",
      change: "+4 new this week",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Completed Tasks",
      value: "156",
      change: "+12% from last week",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Upcoming Deadlines",
      value: "8",
      change: "Next 7 days",
      icon: Calendar,
      color: "text-orange-600"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarContent>
            {/* Logo */}
            <div className="p-6 border-b">
              <img 
                src="/lovable-uploads/6261d696-e0ff-4bd5-b923-79752df3fe68.png" 
                alt="VORZA" 
                className="h-8"
              />
            </div>

            {/* Main Menu */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        className={item.active ? "bg-blue-50 text-blue-600 font-medium" : ""}
                        onClick={() => item.path && handleNavigation(item.path)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Bottom Menu */}
            <div className="mt-auto">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {bottomSidebarItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          onClick={() => item.path && handleNavigation(item.path)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search"
                    className="pl-9 w-64"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-sm">
                  🇺🇸 Eng (US) <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">M</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Musfiq</div>
                    <div className="text-muted-foreground text-xs">Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Musfiq!</h1>
                <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {stat.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "E-commerce Website", status: "In Progress", progress: 75 },
                        { name: "Mobile App Development", status: "Review", progress: 90 },
                        { name: "SEO Optimization", status: "Completed", progress: 100 },
                        { name: "Social Media Campaign", status: "Planning", progress: 25 },
                      ].map((project, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <p className="text-sm text-muted-foreground">{project.status}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{project.progress}%</p>
                            <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                              <div 
                                className="h-2 bg-blue-600 rounded-full" 
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="h-20 flex flex-col items-center justify-center">
                        <Monitor className="h-6 w-6 mb-2" />
                        <span className="text-sm">New Project</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                        <Users className="h-6 w-6 mb-2" />
                        <span className="text-sm">Team</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                        <MessageSquare className="h-6 w-6 mb-2" />
                        <span className="text-sm">Messages</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                        <BarChart3 className="h-6 w-6 mb-2" />
                        <span className="text-sm">Analytics</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;