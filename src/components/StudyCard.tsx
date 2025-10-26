import type { Study } from "@/data/studies";

function Badge({ type }: { type: Study["type"] }) {
  const label = type === "peer-reviewed" ? "Peer‑reviewed" : type === "government" ? "Official" : "Summary";
  return <span className="rounded-md border border-fg/20 px-2 py-1 text-xs text-sub">{label}</span>;
}

export default function StudyCard({ s }: { s: Study }) {
  return (
    <article className="card flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-medium">{s.title}</h3>
        <Badge type={s.type} />
      </div>
      <p className="text-sub text-sm">
        {s.authors ? `${s.authors}. ` : ""}
        {s.journal ? <><em>{s.journal}</em>{s.year ? ` (${s.year})` : ""}. </> : s.year ? `${s.year}. ` : ""}
        {s.summary}
      </p>
      <a href={s.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-fit" aria-label={`Read ${s.title}`}>
        Read the paper
      </a>
    </article>
  );
}
