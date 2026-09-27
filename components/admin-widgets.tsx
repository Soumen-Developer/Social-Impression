export function StatCard({
  label,
  value,
  delta,
  tone = "iris",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: "iris" | "signal" | "amber" | "red";
}) {
  const tones = {
    iris: "text-iris-300",
    signal: "text-signal-300",
    amber: "text-amber-300",
    red: "text-red-300",
  };
  return (
    <div className="dash-card p-5">
      <p className="font-grotesk text-[10px] uppercase tracking-[0.22em] text-bone-500">{label}</p>
      <p className="mt-2.5 font-display text-3xl tracking-tight">{value}</p>
      {delta ? <p className={`mt-1 font-grotesk text-[11px] ${tones[tone]}`}>{delta}</p> : null}
    </div>
  );
}

export function BarChart({
  data,
  height = 180,
  format = (n: number) => String(n),
}: {
  data: { m: string; revenue: number }[];
  height?: number;
  format?: (n: number) => string;
}) {
  const max = Math.max(...data.map((d) => d.revenue));
  return (
    <div>
      <div className="flex items-end gap-2.5" style={{ height }}>
        {data.map((d) => (
          <div key={d.m} className="group relative flex-1">
            <div
              className="w-full rounded-t-lg bg-gradient-to-t from-iris-600 to-iris-400 transition-all duration-500 group-hover:from-iris-500 group-hover:to-signal-400"
              style={{ height: `${(d.revenue / max) * (height - 24)}px` }}
            />
            <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-line bg-ink-950 px-2 py-1 font-grotesk text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
              {format(d.revenue)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-2.5">
        {data.map((d) => (
          <span key={d.m} className="flex-1 text-center font-grotesk text-[10px] uppercase tracking-wider text-bone-500">
            {d.m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Donut({
  data,
  size = 170,
  thickness = 22,
}: {
  data: { name: string; value: number }[];
  size?: number;
  thickness?: number;
}) {
  const colors = ["#7452f5", "#9072ff", "#b9a7ff", "#d8f55f", "#a49d8c"];
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const arcs = data.reduce<{ name: string; value: number; dash: number; offset: number }[]>((list, d) => {
    const soFar = list.reduce((s, x) => s + x.value, 0);
    const frac = d.value / total;
    return [...list, { name: d.name, value: d.value, dash: frac * c, offset: soFar * c }];
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-7">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {arcs.map((d, i) => (
            <circle
              key={d.name}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth={thickness}
              strokeDasharray={`${d.dash} ${c}`}
              strokeDashoffset={-d.offset}
            />
          ))}
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-2xl">{total}%</span>
        </div>
      </div>
      <ul className="space-y-2">
        {data.map((d, i) => (
          <li key={d.name} className="flex items-center gap-2.5 text-sm">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: colors[i % colors.length] }} />
            <span className="text-bone-400">{d.name}</span>
            <span className="font-grotesk text-xs text-bone-50">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AdminPageHead({
  title,
  sub,
  action,
}: {
  title: string;
  sub?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="font-display text-3xl tracking-tight">{title}</h1>
        {sub ? <p className="mt-1 text-sm text-bone-400">{sub}</p> : null}
      </div>
      {action}
    </div>
  );
}
