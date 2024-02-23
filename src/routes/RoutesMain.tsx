import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes"
import { DashboardPage } from "../pages/DashboardPage/DashboardPage"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />} >
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}