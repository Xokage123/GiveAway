// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_3/road_map.png'
import RoadMap_mobile from '../../public/image/step_3/road_map(320).png'
import Product from '../../public/image/step_1/product.jpg'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
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
        {
          width >= 768 ? <Image width={width > 1024 ? 477 : 243} height={width > 1024 ? 501 : 255} src={Product} alt={'product'} /> : null
        }
      </div>
    </div>
  )
}

export default Step