"use client";
import { useState } from "react";

export default function PartnerForm() {
  const [status, setStatus] = useState<"idle"|"success"|"error"|"submitting">("idle");
  const [form, setForm] = useState({
    name: "", email: "", company: "", website: "", location: "",
    productTypes: "", capacityMonthly: "", moqUnits: "", leadTimeWeeks: "", notes: "",
  });
  function set<K extends keyof typeof form>(k: K, v: string) { setForm(p => ({ ...p, [k]: v })); }
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault(); setStatus("submitting");
    try {
      const res = await fetch("/api/partners", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          capacityMonthly: form.capacityMonthly ? Number(form.capacityMonthly) : undefined,
          moqUnits: form.moqUnits ? Number(form.moqUnits) : undefined,
          leadTimeWeeks: form.leadTimeWeeks ? Number(form.leadTimeWeeks) : undefined,
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setStatus("success");
      setForm({ name:"", email:"", company:"", website:"", location:"", productTypes:"", capacityMonthly:"", moqUnits:"", leadTimeWeeks:"", notes:"" });
    } catch { setStatus("error"); }
  }
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input className="input" placeholder="Your name *" required value={form.name} onChange={e=>set("name", e.target.value)} />
      <input type="email" className="input" placeholder="Email *" required value={form.email} onChange={e=>set("email", e.target.value)} />
      <input className="input sm:col-span-2" placeholder="Company *" required value={form.company} onChange={e=>set("company", e.target.value)} />
      <input className="input" placeholder="Website" value={form.website} onChange={e=>set("website", e.target.value)} />
      <input className="input" placeholder="Location" value={form.location} onChange={e=>set("location", e.target.value)} />
      <input className="input sm:col-span-2" placeholder="Product types (e.g. soap,deodorant)" value={form.productTypes} onChange={e=>set("productTypes", e.target.value)} />
      <input className="input" placeholder="Capacity / month" value={form.capacityMonthly} onChange={e=>set("capacityMonthly", e.target.value)} />
      <input className="input" placeholder="MOQ (units)" value={form.moqUnits} onChange={e=>set("moqUnits", e.target.value)} />
      <input className="input" placeholder="Lead time (weeks)" value={form.leadTimeWeeks} onChange={e=>set("leadTimeWeeks", e.target.value)} />
      <textarea className="textarea sm:col-span-2" rows={4} placeholder="Notes" value={form.notes} onChange={e=>set("notes", e.target.value)} />
      <div className="sm:col-span-2 flex items-center gap-3">
        <button className="btn btn-primary" disabled={status==='submitting'}>{status==='submitting' ? "Sending…" : "Send interest"}</button>
        {status==='success' && <span className="text-sub text-sm">Thanks — we’ll be in touch.</span>}
        {status==='error' && <span className="text-red-400 text-sm">Something went wrong.</span>}
      </div>
    </form>
  );
}
