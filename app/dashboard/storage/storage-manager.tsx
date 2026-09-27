"use client";

import { useMemo, useState } from "react";
import { CloudUpload, Download, FileAudio, FileArchive, FileImage, FileText, FileVideo, FolderOpen, Search } from "lucide-react";
import { dashFiles, storageFolders, dashArtist } from "@/lib/dash";
import { Ring } from "@/components/ui";
import { ChipGroup } from "@/components/client";

const kindIcon = {
  audio: FileAudio,
  zip: FileArchive,
  image: FileImage,
  video: FileVideo,
  pdf: FileText,
} as const;

const folderColors = ["bg-iris-400", "bg-signal-400", "bg-bone-400", "bg-ember-400", "bg-bone-500"];

export function StorageManager() {
  const [files, setFiles] = useState(dashFiles);
  const [folder, setFolder] = useState("All");
  const [q, setQ] = useState("");
  const [uploading, setUploading] = useState(false);

  const folders = ["All", ...storageFolders.map((f) => f.name)];
  const filtered = useMemo(
    () =>
      files.filter(
        (f) => (folder === "All" || f.folder === folder) && f.name.toLowerCase().includes(q.toLowerCase())
      ),
    [files, folder, q]
  );

  const upload = () => {
    setUploading(true);
    setTimeout(() => {
      setFiles((f) => [
        { name: `new_session_upload_${String(f.length + 1).padStart(2, "0")}.zip`, folder: "Stems", size: "220 MB", date: "Just now", kind: "zip" },
        ...f,
      ]);
      setUploading(false);
    }, 1100);
  };

  const usedPct = Math.round((dashArtist.storageUsed / dashArtist.storageTotal) * 100);

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_2.2fr]">
      {/* left: usage */}
      <div className="space-y-6">
        <section className="dash-card flex flex-col items-center p-7 text-center">
          <Ring value={usedPct} size={150} stroke={10} sub="of storage" tone="#9072ff" />
          <p className="mt-4 font-display text-2xl tracking-tight">
            {dashArtist.storageUsed} GB <span className="text-base text-bone-500">of {dashArtist.storageTotal} GB</span>
          </p>
          <button
            onClick={upload}
            disabled={uploading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone-50 py-3.5 font-grotesk text-sm text-ink-900 transition-all hover:bg-white disabled:opacity-60"
          >
            <CloudUpload size={16} />
            {uploading ? "Uploading…" : "Upload files"}
          </button>
          <p className="mt-3 text-xs text-bone-500">Masters, stems, artwork, videos, docs — up to 2 GB per file.</p>
        </section>

        <section className="dash-card p-6">
          <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">By folder</h2>
          <ul className="mt-4 space-y-3.5">
            {storageFolders.map((f, i) => (
              <li key={f.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-bone-50/85">
                    <FolderOpen size={13} className="text-bone-500" />
                    {f.name}
                  </span>
                  <span className="font-grotesk text-xs text-bone-400">{f.used} GB</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-ink-700">
                  <div className={`h-full rounded-full ${folderColors[i]}`} style={{ width: `${(f.used / dashArtist.storageUsed) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-bone-500">
            Need more? Momentum members can upgrade to 100 GB from Packages — or clear old session takes from Stems.
          </p>
        </section>
      </div>

      {/* right: files */}
      <section className="dash-card p-6 md:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ChipGroup options={folders} value={folder} onChange={setFolder} />
          <label className="relative lg:w-64">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-bone-500" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search files…" className="field py-2.5 pl-10" aria-label="Search files" />
          </label>
        </div>

        {/* mobile cards / desktop table */}
        <div className="mt-6 hidden md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                <th className="pb-3">File</th>
                <th className="pb-3">Folder</th>
                <th className="pb-3">Size</th>
                <th className="pb-3">Date</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f) => {
                const Icon = kindIcon[f.kind as keyof typeof kindIcon] ?? FileText;
                return (
                  <tr key={f.name} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                    <td className="py-3.5">
                      <span className="flex items-center gap-3">
                        <Icon size={15} className="shrink-0 text-iris-300" />
                        <span className="max-w-[280px] truncate text-bone-50/90">{f.name}</span>
                      </span>
                    </td>
                    <td className="py-3.5 text-bone-400">{f.folder}</td>
                    <td className="py-3.5 font-grotesk text-xs text-bone-400">{f.size}</td>
                    <td className="py-3.5 font-grotesk text-xs text-bone-500">{f.date}</td>
                    <td className="py-3.5 text-right">
                      <button className="grid h-8 w-8 place-items-center rounded-full border border-line2 text-bone-400 transition-all hover:border-iris-400/60 hover:text-bone-50" aria-label={`Download ${f.name}`}>
                        <Download size={13} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="mt-6 space-y-2.5 md:hidden">
          {filtered.map((f) => {
            const Icon = kindIcon[f.kind as keyof typeof kindIcon] ?? FileText;
            return (
              <li key={f.name} className="flex items-center gap-3.5 rounded-2xl border border-line bg-ink-850 p-4">
                <Icon size={17} className="shrink-0 text-iris-300" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-bone-50/90">{f.name}</p>
                  <p className="font-grotesk text-[11px] text-bone-500">{f.folder} · {f.size} · {f.date}</p>
                </div>
                <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line2 text-bone-400" aria-label={`Download ${f.name}`}>
                  <Download size={14} />
                </button>
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm text-bone-400">No files match. Try another folder or search.</p>
        ) : null}
      </section>
    </div>
  );
}
