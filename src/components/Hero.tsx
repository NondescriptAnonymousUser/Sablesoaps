import WaitlistForm from "./WaitlistForm";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-narrow pt-20 pb-16">
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
          Everyday soap. <span className="opacity-70">Without the hidden stuff.</span>
        </h1>
        <p className="max-w-2xl text-lg text-sub">
          Minimalist, modern hygiene. No synthetic fragrance. No harsh sulfates. No parabens.
          Thoughtful formulas that do the job—without getting in your way.
        </p>
        <WaitlistForm />
        <div className="flex items-center gap-3">
          <a
            href="/evidence"
            className="btn btn-primary text-base sm:text-lg px-6 py-4"
            aria-label="See the research evidence"
          >
            See the research →
          </a>
        </div>
      </div>
    </section>
  );
}
