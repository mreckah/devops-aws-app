export interface Certification {
  id: number
  name: string
  description: string
  cost: number
  expirationDate: string
  registrationDate: string
  status: string
}

export interface CertificationRequest {
  name: string
  description: string
  cost: number
  expirationDate: string
}
