import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="container-narrow py-16">
        <h1 className="text-3xl font-semibold mb-4">Privacy</h1>
        <p className="text-sub max-w-prose">We collect only what we need to contact you about launches and updates (e.g., your email).
          Data stays with us; we don’t sell it. You can request deletion at any time.</p>
      </main>
      <Footer />
    </>
  );
}
