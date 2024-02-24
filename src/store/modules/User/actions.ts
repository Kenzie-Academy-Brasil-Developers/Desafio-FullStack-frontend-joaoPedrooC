import { IUser } from "../../../interfaces/user";
import { GET_USER_INFO } from "./actionTypes";

export const getUserInfo = (userData: IUser) => {
  return {
    type: GET_USER_INFO,
    user: userData
  }
}