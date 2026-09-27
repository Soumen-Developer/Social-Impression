import type { Metadata } from "next";
import { PageHeader } from "@/components/dash";
import { SettingsView } from "./settings-view";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" sub="Your account, your rules. Everything here applies across your dashboard and public portfolio." />
      <SettingsView />
    </>
  );
}
