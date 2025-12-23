import { Certification, CertificationRequest } from "@/types/certification"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export async function getCertifications(): Promise<Certification[]> {
  const res = await fetch(`${API_URL}/api/certifications`, {
    cache: "no-store",
  })
  return res.json()
}

export async function createCertification(data: CertificationRequest): Promise<Certification> {
  const res = await fetch(`${API_URL}/api/certifications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
