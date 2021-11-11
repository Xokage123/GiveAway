// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_1/road_map.png'
import Product from '../../public/image/step_1/product.jpg'
// Styles
import Styles from '../../styles/pages/step_1/style.module.scss'

const Step_1: NextPage = () => {
  const router = useRouter()
  
  return (
    <div className={Styles.Container}>
      <Image className={Styles.Roadmap} src={RoadMap} alt={'road_map'} />
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
        <Image src={Product} alt={'road_map'} />
      </div>
    </div>
  )
}

export default Step_1