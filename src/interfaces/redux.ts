import { IContact } from "./contacts"
import { IUser } from "./user"

export interface getUserInterface {
  type: string
  user: IUser
}

export interface IContactTypes {
  type: string
  contacts: Array<IContact> | IContact
}