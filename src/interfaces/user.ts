export interface IUserLoginInterface {
  email: string
  password: string
}

export interface IUser {
  id: string
  name: string
  email: string
  number: string
  createdAt: Date
}

export interface IUserLoginResponse {
  user: IUser
  token: string
}

export interface IUserCreate {
  name: string
  email: string
  password: string
  number: string
}