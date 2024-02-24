import { getUserInterface } from "../../../interfaces/redux";
import { IUser } from "../../../interfaces/user";
import { GET_USER_INFO } from "./actionTypes";

export const userReducer = (state: IUser | null = null, action: getUserInterface) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.user
    default:
      return null
  }
}