import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PartnerForm from "./partner-form";

export default function ManufacturersPage() {
  return (
    <>
      <Nav />
      <main className="container-narrow py-16">
        <h1 className="text-4xl font-semibold mb-4">Manufacturing partners</h1>
        <p className="text-sub max-w-prose mb-8">
          We’re building a modern hygiene brand with disciplined, minimal formulations.
          If you produce soap bars, deodorant sticks, or body wash—especially fragrance-free or
          essential-oil options—let’s talk.
        </p>
        <div className="card">
          <PartnerForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
