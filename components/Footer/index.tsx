// Styles
import Styles from './style.module.scss'

export const FooterComponent: React.FC = () => {
  return (
    <footer className={Styles.Footer}>
      <section className={Styles.FooterTop}>
        <div className={['main-container', Styles.FooterTop_Container].join(" ")}>
          <div className={Styles.FooterTop_Information}>
            <h4 className={Styles.FooterTop_Title}>Privacy and Terms</h4>
            <ul className={Styles.FooterTop_List}>
              <li className={Styles.FooterTop_Item}>
                <a href="./">Privacy Policy</a>
              </li>
              <li className={Styles.FooterTop_Item}>
                <a href="./">Terms of use</a>
              </li>
            </ul>
          </div>
          <div className={Styles.FooterTop_Information}>
            <h4 className={Styles.FooterTop_Title}>Need Help?</h4>
            <ul className={Styles.FooterTop_List}>
              <li className={Styles.FooterTop_Item}>
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className={Styles.FooterTop_Information}>
            <h4 className={Styles.FooterTop_Title}>Social</h4>
            <ul className={Styles.FooterTop_List}>
              <li className={Styles.FooterTop_Item}>
                <a href="./">Facebook</a>
              </li>
              <li className={Styles.FooterTop_Item}>
                <a href="./">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={Styles.FooterBottom}>
        <div className="main-container">
          <a href="./">© All Rights Reserved</a>
        </div>
      </section>
    </footer>
  )
}