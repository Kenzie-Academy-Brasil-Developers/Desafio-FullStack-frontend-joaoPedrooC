import { Navigate, Outlet } from "react-router"

export const ProtectedRoutes = () => {
  const userToken = localStorage.getItem('@contacts:token')
  const userId = localStorage.getItem('@contacts:userId')

  return userToken && userId ? <Outlet /> : <Navigate to={'/'} />
}