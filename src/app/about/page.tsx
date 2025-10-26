import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="container-narrow py-16">
        <h1 className="text-4xl font-semibold mb-4">Why we exist</h1>
        <div className="prose prose-invert max-w-none">
          <p>We make everyday hygiene products with disciplined, minimal formulations.
            No synthetic fragrance. No unnecessary dyes. No loud claims. Just products that do their job well,
            and get out of your way.</p>
          <p className="text-sub">We avoid medical claims and follow relevant cosmetic regulations. Product descriptions
            are informational only.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
