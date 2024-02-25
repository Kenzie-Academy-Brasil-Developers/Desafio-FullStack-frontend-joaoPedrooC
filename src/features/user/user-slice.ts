import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";


const initialState: IUser | Partial<IUser> = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state, { payload }: PayloadAction<IUser>) => {
      return payload
    },
    updateUser: (state, { payload }: PayloadAction<IUser>) => {
      return payload
    },
    deleteUser: (state, payload: PayloadAction) => {
      return {}
    }
  }
})

export const { getUserInfo, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer