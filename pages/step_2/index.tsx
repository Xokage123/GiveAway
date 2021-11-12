// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_2/road_map.png'
import RoadMap_mobile from '../../public/image/step_2/road_map(320).png'
import Post from '../../public/image/step_2/facebook_post.jpg'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
// SVG
import S2_Arrow from '../../public/icons/S2_Arrow'
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
          <h2 className={Styles.Information_Title}>Step 2</h2>
          <h3 className={Styles.Information_Subtitle}>Share Facebook post</h3>
          <p className={Styles.Information_Text}>To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!</p>
          <button onClick={() => {
            router.push('/step_3')
          }} className={Styles.Information_Button}>continue</button>
        </section>
        <Image width={width >= 900 ? 478 : 243} height={width >= 900 ? 443 : 225} src={Post} alt={'road_map'} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          flexDirection: 'column'
        }}>
          <S2_Arrow />
          {
            width < 700 ? <span style={{
              color: '#FF0000',
              fontSize: '18px',
              lineHeight: '22px',
              fontWeight: 'bold'
            }}>Press here</span> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Step