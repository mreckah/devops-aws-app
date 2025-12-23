"use client";

import CertificationForm from "@/components/CertificationForm";
import CertificationTable from "@/components/CertificationTable";
import { useEffect, useState } from "react";
import { getCertifications } from "@/lib/api";
import { Certification } from "@/types/certification";

export default function Dashboard() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  const refreshData = async () => {
    const data = await getCertifications();
    setCertifications(data);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Certification <span className="text-blue-600">Management</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm tracking-wide uppercase mt-2">
              Professional Certification Management System
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-4">
            <CertificationForm onCreated={refreshData} />
          </aside>
          <section className="lg:col-span-8">
            <CertificationTable certifications={certifications} />
          </section>
        </div>
      </div>
    </div>
  );
}
