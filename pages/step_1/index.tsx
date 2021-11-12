// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_1/road_map.png'
import RoadMap_mobile from '../../public/image/step_1/road_map(320).png'
import Product from '../../public/image/step_1/product.jpg'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
// Styles
import Styles from '../../styles/pages/step/style.module.scss'

const Step_1: NextPage = () => {
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
          <h2 className={Styles.Information_Title}>Step 1</h2>
          <h3 className={Styles.Information_Subtitle}>Lorem ipsum dolor sit amet</h3>
          <p className={Styles.Information_Text}>Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus. Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:</p>
          <ol className={Styles.Information_List}>
            <li>Mauris rutrum interdum condimentum.</li>
            <li>Donec commodo quis arcu eget pretium.</li>
          </ol>
          <button onClick={() => {
            router.push('/step_2')
          }} className={Styles.Information_Button}>Agree and continue</button>
        </section>
        {
          width >= 768 ? <Image width={width > 1024 ? 477 : 243} height={width > 1024 ? 501 : 255} src={Product} alt={'product'} /> : null
        }
      </div>
    </div>
  )
}

export default Step_1