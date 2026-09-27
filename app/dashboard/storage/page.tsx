import type { Metadata } from "next";
import { PageHeader, NextPaymentChip } from "@/components/dash";
import { StorageManager } from "./storage-manager";

export const metadata: Metadata = { title: "Storage" };

export default function StoragePage() {
  return (
    <>
      <PageHeader
        title="Storage"
        sub="Your release vault — masters, stems, artwork and assets, organised by project and ready to download forever."
        action={<NextPaymentChip />}
      />
      <StorageManager />
    </>
  );
}
