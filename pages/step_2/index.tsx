// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_2/road_map.png'
import Post from '../../public/image/step_2/facebook_post.jpg'
// SVG
import S2_Arrow from '../../public/icons/S2_Arrow'
// Styles
import Styles from '../../styles/pages/step_2/style.module.scss'

const Step: NextPage = () => {
  const router = useRouter()

  return (
    <div className={Styles.Container}>
      <Image className={Styles.Roadmap} src={RoadMap} alt={'road_map'} />
      <div className={Styles.Content}>
        <section className={Styles.Information_Container}>
          <h2 className={Styles.Information_Title}>Step 2</h2>
          <h3 className={Styles.Information_Subtitle}>Share Facebook post</h3>
          <p className={Styles.Information_Text}>To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!</p>
          <button onClick={() => {
            router.push('/step_3')
          }} className={Styles.Information_Button}>continue</button>
        </section>
        <div>
          <S2_Arrow />
        </div>
        <Image src={Post} alt={'road_map'} />
      </div>
    </div>
  )
}

export default Step