export default function KeyTakeaways() {
  const items = [
    { title: "Fragrance (‘parfum’) often hides mixtures", body: "Fragrance chemicals are VOCs that can build up indoors and may irritate skin and airways. Labels often don’t disclose every component." },
    { title: "Keep surfactants gentle", body: "In lab studies, classic SLS is tougher on skin cells than simple soap salts (e.g., potassium laurate/oleate), which also biodegrade more readily." },
    { title: "Skip certain preservatives & plasticizers", body: "Parabens and phthalates are widely studied for endocrine activity. Evidence links some exposures to shifts in hormones and pubertal timing." },
    { title: "Antibacterial soaps aren’t better", body: "FDA banned triclosan/triclocarban in consumer washes (2016) after finding no added benefit over plain soap plus safety concerns." },
    { title: "Transparency builds trust", body: "Independent testing has found hidden chemicals in everyday products. Clear ingredient lists help people avoid allergens or disruptors." },
  ];
  return (
    <section className="container-narrow py-10">
      <h2 className="text-2xl font-semibold mb-3">Bottom line in 60 seconds</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="card">
            <h3 className="text-lg font-medium mb-1">{it.title}</h3>
            <p className="text-sub text-sm">{it.body}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-sub mt-4">Note: Many findings are lab or observational. We avoid medical claims and follow cosmetics regulations.</p>
    </section>
  );
}
