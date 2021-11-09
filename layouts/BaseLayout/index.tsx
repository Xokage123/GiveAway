// Components
import { HeaderComponent } from "../../components/Header"
import { FooterComponent } from "../../components/Footer"
interface ILayoutProps {
  children: React.ReactNode
}

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main className="main-container">
        {children}
      </main>
      <FooterComponent />
    </>
  )
}