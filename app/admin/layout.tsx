import { AdminSidebar } from "@/components/admin-chrome";

export const metadata = {
  title: { default: "Admin — Social Impression", template: "%s — SI Admin" },
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-svh bg-ink-950">
      <AdminSidebar />
      <div className="lg:pl-[248px]">
        <main className="px-4 pb-24 pt-7 md:px-7 md:pb-12 lg:pb-8">{children}</main>
      </div>
    </div>
  );
}
