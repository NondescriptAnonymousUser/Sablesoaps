import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="container-narrow py-16">
        <h1 className="text-3xl font-semibold mb-4">Terms</h1>
        <p className="text-sub max-w-prose">This site is an expression of interest. Products are pre-release.
          No medical claims are made. Always patch-test new products.</p>
      </main>
      <Footer />
    </>
  );
}
