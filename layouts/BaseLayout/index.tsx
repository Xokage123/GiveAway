// Components
import { HeaderComponent } from "../../components/Header"
import { FooterComponent } from "../../components/Footer"
import { HowThisWorkComponent } from '../../components/HowThisWork'
interface ILayoutProps {
  children: React.ReactNode
}

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main>
        <div className="main-container">
          {children}
          <HowThisWorkComponent />
        </div>
      </main>
      <FooterComponent />
    </>
  )
}