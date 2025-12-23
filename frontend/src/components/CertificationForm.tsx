"use client";
import { useState } from "react";
import { createCertification } from "@/lib/api";

export default function CertificationForm({
  onCreated,
}: {
  onCreated: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    cost: "",
    description: "",
    expirationDate: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCertification({ ...form, cost: parseFloat(form.cost) || 0 });
    setForm({ name: "", cost: "", description: "", expirationDate: "" });
    onCreated();
  };

  const inputClass =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 " +
    "placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 " +
    "focus:ring-2 focus:ring-indigo-500/20 transition";

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-indigo-600 rounded-full" />
        Register Certification
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          className={inputClass}
          placeholder="Certification name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          className={inputClass}
          type="number"
          step="0.01"
          placeholder="Cost ($)"
          value={form.cost}
          onChange={(e) => setForm({ ...form, cost: e.target.value })}
          required
        />

        <input
          className={inputClass}
          type="datetime-local"
          value={form.expirationDate}
          onChange={(e) => setForm({ ...form, expirationDate: e.target.value })}
          required
        />

        <textarea
          className={`${inputClass} h-24 resize-none`}
          placeholder="Description (optional)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-xl transition active:scale-[0.98] shadow-sm"
        >
          Add Certification
        </button>
      </form>
    </div>
  );
}
