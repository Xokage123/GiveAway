// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Images
import RoadMap from '../../public/image/step_4/road_map.png'
import RoadMap_mobile from '../../public/image/step_4/road_map(320).png'
import Product from '../../public/image/step_1/product.jpg'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
// SVG
import SVG_Price from '../../public/icons/Price'
// Styles
import Styles from '../../styles/pages/step/style.module.scss'
import { FC } from 'react'

interface IItemsProps {
  text: string
  SVG?: FC
}

const items: Array<IItemsProps> = [
  {
    text: 'You need to Buy our Product on Amazon at the specified price $20.89!'
  },
  {
    text: 'After the purchase - Send us your Order Number or the Screenshot to our manager in FB Messenger'
  },
  {
    text: 'When you receive the product please use it and share product reviews'
  },
  {
    text: 'We will send you the 25$ Amazon Gift Card code within 24 hours after we get short review from you.'
  },
  {
    text: 'As a result, you will receive our Product Free!',
    SVG: SVG_Price
  },
]

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
          <h2 className={Styles.Information_Title}>Step 4</h2>
          <h3 className={Styles.Information_Subtitle}>How to Buy a Product with 100% BONUS!</h3>
          <ul className={Styles.Information_BonusList}>
            {
              items.map((el, index) => {
                const { SVG, text } = el;
                return (
                  <li className={Styles.Information_Item} key={index}>
                    <div className={Styles.Information_ItemBoll}>{SVG ? <SVG /> : index + 1}</div>
                    <p className={Styles.Information_ItemText}>{text}</p>
                  </li>
                )
              })
            }
          </ul>
          <div className={Styles.Information_ButtonContainer}>
            <button onClick={() => {
              router.push('/step_5')
            }} className={Styles.Information_Button}>Get Offer</button>
            <span style={{
              display: 'block',
              maxWidth: '380px',
              textAlign: 'center',
              paddingTop: '20px',
              fontWeight: 'bold'
            }}>I don't like offer terms</span>
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