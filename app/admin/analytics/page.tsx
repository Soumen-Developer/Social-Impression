"use client";

import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead, StatCard, BarChart, Donut } from "@/components/admin-widgets";
import { platformMix, packageMix, salesMonths } from "@/lib/admin";

const traffic = [
  { m: "Apr", revenue: 9.1 },
  { m: "May", revenue: 10.4 },
  { m: "Jun", revenue: 12.8 },
  { m: "Jul", revenue: 14.2 },
  { m: "Aug", revenue: 16.9 },
];

export default function AdminAnalyticsPage() {
  return (
    <>
      <AdminTopbar title="Analytics" />
      <div className="mt-6">
        <AdminPageHead title="Analytics" sub="Streams, engagement and funnel health across the ecosystem." />

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard label="Streams (30d)" value="2.4M" delta="+22% MoM" tone="signal" />
          <StatCard label="Site visitors" value="48.9K" delta="+9% MoM" />
          <StatCard label="Waitlist signups" value="312" delta="+41% MoM" tone="signal" />
          <StatCard label="Discovery call show-rate" value="78%" delta="+4 pts" />
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-2">
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Streams by platform</h2>
            <div className="mt-6">
              <Donut data={platformMix} />
            </div>
          </section>
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Package mix · sold units</h2>
            <div className="mt-6">
              <Donut data={packageMix} />
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Streams generated per month (millions)</h2>
            <div className="mt-6">
              <BarChart data={salesMonths} height={200} format={(n) => `${(n * 0.58).toFixed(1)}M`} />
            </div>
          </section>
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Site traffic (10K sessions)</h2>
            <div className="mt-6">
              <BarChart data={traffic} height={200} format={(n) => `${n}K`} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
