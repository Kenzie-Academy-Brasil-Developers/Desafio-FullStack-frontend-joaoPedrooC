import { IContact } from "./contacts"

export interface IUserLoginInterface {
  email: string
  password: string
}

export interface IUser {
  id: string
  name: string
  email: string
  number: string
  createdAt: string
  contacts: IContact[]
}

export interface IUserLoginResponse {
  userId: string
  token: string
}

export interface IUserCreate {
  name: string
  email: string
  password: string
  number: string
}

export type TUserUpdate = Partial<IUserCreate>