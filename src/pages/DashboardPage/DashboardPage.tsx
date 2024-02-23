import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"
import { DashboardSection } from "../../components/sections/DashboardSection/DashboardSection"

export const DashboardPage = () => {
  return (
    <>
      <DefaultTemplate>
        <DashboardSection />
      </DefaultTemplate>
    </>
  )
}