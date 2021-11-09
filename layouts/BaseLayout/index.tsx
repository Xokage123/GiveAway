import {HeaderComponent} from "../../components/Header"

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
      <footer>Подвал сайта</footer>
    </>
  )
}