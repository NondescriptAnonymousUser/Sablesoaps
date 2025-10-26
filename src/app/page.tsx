import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureCards />
        <section className="container-narrow pb-24">
          <div className="grid gap-6 rounded-2xl border border-fg/10 p-6 sm:grid-cols-3 bg-mid/40">
            <div className="sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-2">Fragrance-free core</h2>
              <p className="text-sub text-sm max-w-prose">
                Our baseline bar is intentionally plain: just what’s needed to cleanse well.
                Nothing you don’t. For those who want scent, we’re exploring essential-oil
                options with careful safety limits and derm testing—always optional.
              </p>
            </div>
            <div>
              <div className="text-sm text-sub">
                <div className="mb-2 font-medium text-fg">Coming next</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deodorant (aluminium-free)</li>
                  <li>Body wash (sulfate-free)</li>
                  <li>Hand wash refills</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
