"use client";

import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead, StatCard } from "@/components/admin-widgets";
import { Pill } from "@/components/ui";
import { adminStorage } from "@/lib/admin";

export default function AdminStoragePage() {
  const totalUsed = adminStorage.reduce((s, c) => s + c.used, 0);
  const totalCap = adminStorage.reduce((s, c) => s + c.total, 0);

  return (
    <>
      <AdminTopbar title="Storage" />
      <div className="mt-6">
        <AdminPageHead title="Storage" sub="Ecosystem-wide file storage — who is heavy, who is near limits." />

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard label="Total used" value={`${totalUsed.toFixed(1)} GB`} />
          <StatCard label="Total capacity" value={`${totalCap} GB`} />
          <StatCard label="Utilisation" value={`${Math.round((totalUsed / totalCap) * 100)}%`} tone="signal" />
          <StatCard label="Near limit" value="1 client" delta="Tanya Iype · North Star" tone="amber" />
        </div>

        <div className="dash-card mt-6 overflow-x-auto p-0">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {["Client", "Used", "Capacity", "Usage"].map((h) => (
                  <th key={h} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminStorage.map((c) => (
                <tr key={c.client} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                  <td className="p-4 text-bone-50/90">{c.client}</td>
                  <td className="p-4 font-grotesk text-xs text-bone-400">{c.used} GB</td>
                  <td className="p-4 font-grotesk text-xs text-bone-400">{c.total} GB</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-ink-700">
                        <div
                          className={`h-full rounded-full ${c.pct > 80 ? "bg-red-400" : c.pct > 60 ? "bg-amber-300" : "bg-iris-400"}`}
                          style={{ width: `${c.pct}%` }}
                        />
                      </div>
                      <span className="font-grotesk text-xs text-bone-400">{c.pct}%</span>
                      {c.pct > 60 ? <Pill tone="amber">Monitor</Pill> : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
