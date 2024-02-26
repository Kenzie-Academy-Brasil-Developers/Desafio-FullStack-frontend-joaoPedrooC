export interface IContact {
  id: string
  name: string
  email: string
  number: string
  createdAt: Date
  contactOwnerId: string
}

export interface ICreateContact {
  name: string
  email: string
  number: string
}