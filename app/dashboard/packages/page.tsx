import type { Metadata } from "next";
import { PageHeader, NextPaymentChip } from "@/components/dash";
import { PackagesDash } from "./packages-dash";

export const metadata: Metadata = { title: "Packages" };

export default function DashPackagesPage() {
  return (
    <>
      <PageHeader
        title="Packages"
        sub="What is active, what is next, and where you can grow. Upgrade, downgrade or add another single whenever the moment calls for it."
        action={<NextPaymentChip />}
      />
      <PackagesDash />
    </>
  );
}
