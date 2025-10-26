import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import KeyTakeaways from "@/components/KeyTakeaways";
import StudyCard from "@/components/StudyCard";
import { studies } from "@/data/studies";

export const metadata = {
  title: "Evidence | " + (process.env.NEXT_PUBLIC_BRAND_NAME ?? "Project Soap"),
  description: "Plain‑English summaries with links to peer‑reviewed and official sources behind our formulations and ingredient choices.",
};

export default function EvidencePage() {
  const peer = studies.filter(s => s.type === "peer-reviewed");
  const official = studies.filter(s => s.type === "government");
  const other = studies.filter(s => s.type === "ngo/news");
  return (
    <>
      <Nav />
      <main>
        <section className="container-narrow pt-12 pb-6">
          <h1 className="text-4xl font-semibold mb-3">The Research, Made Simple</h1>
          <p className="text-sub max-w-prose">
            Here are the studies and official rulings that shape our product decisions.
            We keep the summaries short and link out so you can read the originals.
          </p>
        </section>

        <KeyTakeaways />

        <section className="container-narrow pb-10">
          <h2 className="text-2xl font-semibold mb-4">Read the research</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {peer.map(s => <StudyCard key={s.id} s={s} />)}
            {official.map(s => <StudyCard key={s.id} s={s} />)}
            {other.map(s => <StudyCard key={s.id} s={s} />)}
          </div>
          <p className="text-xs text-sub mt-4">
            Context matters: lab (in vitro) results don’t equal real‑world risk, and associations don’t prove causation.
            We prioritize ingredient choices that minimize uncertainty while delivering performance.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
