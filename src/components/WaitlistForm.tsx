"use client";
import { useState } from "react";

export default function WaitlistForm({ source = "homepage" }: { source?: string }) {
  const [status, setStatus] = useState<"idle"|"success"|"error"|"submitting">("idle");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState(""); const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting"); setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setStatus("success"); setMessage("You're in. We'll be in touch soon.");
      setName(""); setEmail("");
    } catch (err: any) {
      setStatus("error"); setMessage(err?.message || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <input aria-label="Your name" className="input sm:flex-1" placeholder="Name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
      <input required type="email" aria-label="Email address" className="input sm:flex-[2]" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn btn-primary" disabled={status==='submitting'}>{status==='submitting' ? "Joining…" : "Join waitlist"}</button>
      {message && <p className={`text-xs ${status==='error' ? "text-red-400" : "text-sub"}`}>{message}</p>}
    </form>
  );
}
