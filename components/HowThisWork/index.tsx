// Icons
import SVG_HowWorkRow from '../../public/icons/HowWorkRow'
import SVG_Product from '../../public/icons/HW_Product'
import SVG_ProductBye from '../../public/icons/HW_productBue'
import SVG_Test from '../../public/icons/HW_Test'
import SVG_Money from '../../public/icons/HW_Money'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
// Style
import Styles from './style.module.scss'

export const HowThisWorkComponent: React.FC = () => {
  const { width } = useWindowSize()
  
  return <section className={Styles.Container}>
    <h2 className={Styles.Title}>How does it work?</h2>
    <div style={width < 768 ? {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }: {}}>
      <ul className={Styles.List}>
        <li className={Styles.Item}>
          <div className={Styles.ItemBall}>
            Easy<br />as<br />1-2-3
          </div>
        </li>
        <SVG_HowWorkRow />
        <li className={Styles.Item}>
          <div className={Styles.ItemBall}>
            <SVG_Product />
          </div>
          <p>Choose product</p>
        </li>
        {
          width >= 768 ? <SVG_HowWorkRow /> : null
        }
        <li className={Styles.Item}>
          <div className={Styles.ItemBall}>
            <SVG_ProductBye />
          </div>
          <p>Buy product</p>
        </li>
        <SVG_HowWorkRow />
        <li className={Styles.Item}>
          <div className={Styles.ItemBall}>
            <SVG_Test />
          </div>
          <p>Test and share review</p>
        </li>
        {
          width >= 768 ? <SVG_HowWorkRow /> : null
        }
        <li className={Styles.Item}>
          <div className={Styles.ItemBall}>
            <SVG_Money />
          </div>
          <p>Get 100% money back</p>
        </li>
      </ul>
    </div>
  </section>
}