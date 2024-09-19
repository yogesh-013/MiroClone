import { Sidebar } from "./_components/sidebar";
import OrgSide from "./_components/org_sidebar";
import NavBar from "./_components/navbar";

interface DashboardLayoutProps{children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="w-full h-screen">
      <Sidebar />
      <div className="pl-[100px] h-full">
        <div className="flex gap-x-3 h-full ">
          <OrgSide />
          <div className="h-full flex-1">
            <NavBar  />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}