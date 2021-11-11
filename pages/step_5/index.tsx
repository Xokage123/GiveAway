// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_5/road_map.png'
import Product from '../../public/image/step_1/product.jpg'
// SVG
import SVG_AmazonMini from '../../public/icons/AmazonMini'
// Styles
import Styles from '../../styles/pages/step_5/style.module.scss'

const Step: NextPage = () => {
  const router = useRouter()

  return (
    <div className={Styles.Container}>
      <Image className={Styles.Roadmap} src={RoadMap} alt='road_map' />
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
        <Image src={Product} alt='product' />
      </div>
    </div>
  )
}

export default Step