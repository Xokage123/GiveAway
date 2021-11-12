// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_5/road_map.png'
import RoadMap_mobile from '../../public/image/step_5/road_map(320).png'
import Product from '../../public/image/step_1/product.jpg'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
// SVG
import SVG_AmazonMini from '../../public/icons/AmazonMini'
// Styles
import Styles from '../../styles/pages/step/style.module.scss'

const Step: NextPage = () => {

  const router = useRouter()

  const { width } = useWindowSize()

  return (
    <div className={Styles.Container}>
      {
        width >= 460 ?
          (
            <div className={Styles.Roadmap}>
              <Image src={RoadMap} alt='road_map' />
            </div>
          ) :
          (
            <div className={Styles.Roadmap}>
              <Image src={RoadMap_mobile} alt='road_map' />
            </div>
          )
      }
      <div className={Styles.Content}>
        <section className={Styles.Information_Container}>
          <h2 className={Styles.Information_Title}>Step 5</h2>
          <h3 className={Styles.Information_Subtitle}>Buy and Provide order ID to our Manager</h3>
          <p className={Styles.Information_Text}>Click the button GO TO AMAZON and Buy a Product</p>
          <button style={{
            marginBottom: '56px'
          }} className={Styles.Information_Button}>Go to amazon <SVG_AmazonMini /></button>
          <p style={{
            maxWidth: '418px',
            paddingBottom: '10px'
          }} className={Styles.Information_Text}>Click on the button below and <span>Provide Order ID<br /> to our Manager</span> in FB Messenger</p>
          <p className={Styles.Information_Small}>(If you have any questions, you can ask them to our Manager)</p>
          <button className={Styles.Information_Button}>provide order id</button>
        </section>
        {
          width >= 768 ? <Image width={width > 1024 ? 477 : 243} height={width > 1024 ? 501 : 255} src={Product} alt={'product'} /> : null
        }
      </div>
    </div>
  )
}

export default Step