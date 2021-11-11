// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_3/road_map.png'
import Product from '../../public/image/step_1/product.jpg'
// Styles
import Styles from '../../styles/pages/step_3/style.module.scss'

const Step: NextPage = () => {
  const router = useRouter()

  return (
    <div className={Styles.Container}>
      <Image className={Styles.Roadmap} src={RoadMap} alt={'road_map'} />
      <div className={Styles.Content}>
        <section className={Styles.Information_Container}>
          <h2 className={Styles.Information_Title}>Step 3</h2>
          <h3 className={Styles.Information_Subtitle}>Amazon Prime</h3>
          <p className={Styles.Information_Text}>Do you have an Amazon Prime account?</p>
          <p style={{
            paddingBottom: '50px'
          }} className={Styles.Information_Text}>To be able to participate in this giveaway you need to have Amazon Prime.</p>
          <div style={{
            display: 'flex',
            gap: '21px'
          }}>
            <button onClick={() => {
              router.push('/step_4')
            }} className={Styles.Information_Button}>Yes, i have</button>
            <button onClick={() => {
              router.push('/step_4')
            }} className={Styles.Information_Button} style={{
              background: 'rgba(0, 0, 0, 0.6)'
            }}>no, i don’t have</button>
          </div>
        </section>
        <Image src={Product} alt={'road_map'} />
      </div>
    </div>
  )
}

export default Step