import { DashSidebar, DashTopbar, Chatbot } from "@/components/dash";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="min-h-svh bg-ink-950">
      <DashSidebar />
      <div className="lg:pl-[264px]">
        <DashTopbar />
        <main className="px-4 pb-28 pt-8 md:px-8 md:pb-16 lg:pb-24">{children}</main>
      </div>
      <Chatbot />
    </div>
  );
}
