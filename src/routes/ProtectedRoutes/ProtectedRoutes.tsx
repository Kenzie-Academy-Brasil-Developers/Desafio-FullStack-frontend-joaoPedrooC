import { Navigate, Outlet } from "react-router"

export const ProtectedRoutes = () => {
  const userToken = localStorage.getItem('@contacts:token')

  return userToken ? <Outlet /> : <Navigate to={'/'} />
}