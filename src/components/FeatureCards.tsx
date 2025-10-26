export default function FeatureCards() {
  const features = [
    { title: "No-nonsense formulas", body: "Simple ingredient lists you can read. No synthetic fragrance, dyes, or unnecessary fillers." },
    { title: "Skin-first performance", body: "Cleans effectively and rinses clean. No tightness, no residue—just balanced skin." },
    { title: "Modern, minimal design", body: "A quiet, black-and-white aesthetic that speaks to clarity, not hype." },
  ];
  return (
    <section className="container-narrow grid gap-4 sm:grid-cols-3 pb-20">
      {features.map((f) => (
        <div key={f.title} className="card">
          <h3 className="text-lg font-medium mb-2">{f.title}</h3>
          <p className="text-sub text-sm">{f.body}</p>
        </div>
      ))}
    </section>
  );
}
