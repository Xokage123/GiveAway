// Next
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// React
import { useState } from 'react'
// Helpers
import useWindowSize from '../helpers/useWindowSizeHook'
// SVG
import SVG_Star from '../public/icons/Star'
import SVG_ArrowNext from '../public/icons/ArrowNext'
import SVG_ArrowPrev from '../public/icons/ArrowPrev'
import SVG_AmazonPrime from '../public/icons/AmazonPrime'
// Image
import Mini_Photo_1 from '../public/image/main_page/product-mini_1.png'
import Mini_Photo_2 from '../public/image/main_page/product-mini_2.png'
import Mini_Photo_3 from '../public/image/main_page/product-mini_3.png'
import Photo_1 from '../public/image/main_page/product_1.png'
// Style
import Styles from '../styles/pages/Main/style.module.scss'

const arrayPhoto: Array<StaticImageData> = [
  Mini_Photo_1,
  Mini_Photo_2,
  Mini_Photo_3
]


interface IOverviewArrayInformation {
  title: string;
  text: string | Array<String>;
  listStyle?: boolean
}

const overviewArrayInformation: Array<IOverviewArrayInformation> = [
  {
    title: "Who It's For",
    text: "Very Dry, Dry, Dry Combination Skin (Type 1, 2)"
  },
  {
    title: "What It Is",
    text: [
      "Step 3 in our customized 3-Step Skincare System.",
      "Dermatologist- developed face moisturizer softens, smooths, improves.Leaves skin glowing."
    ]
  },
  {
    title: "What It Does",
    listStyle: true,
    text: [
      'Silky lotion delivers 8-hour hydration.',
      'Slips on easily, absorbs quickly.',
      'Helps strengthen skin’s own moisture barrier so more moisture stays in.',
      "Skin that holds onto moisture has a youthful-looking glow."
    ]
  },
]

const Home: NextPage = () => {
  const [mainPhoto, setMainPhoto] = useState<StaticImageData>(Photo_1)

  const router = useRouter()

  const { width } = useWindowSize()

  return (
    <>
      <div className={Styles.Product_Container}>
        <section className={Styles.Photos_Container}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <SVG_ArrowPrev />
            <ul className={Styles.PhotosSwiper}>
              {
                arrayPhoto.map((photo, index) => {
                  return (  
                    <li className={Styles.PhotosSwiper_Item} key={index}>
                      <button>
                        <Image src={photo} alt={`Photo ${index}`} />
                      </button>
                    </li>
                  )
                })
              }
            </ul>
            <SVG_ArrowNext />
          </div>
          <Image width={440} src={mainPhoto} alt="Main photo" />
        </section>
        <section className={Styles.ProductInformation_Container}>
          <div className={Styles.ProductInformation_RatingContainer}>
            <p className={Styles.ProductInformation_RatingTitle}>Best seller</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <div style={{
                display: 'flex'
              }}>
                <SVG_Star />
                <SVG_Star />
                <SVG_Star />
                <SVG_Star />
                <SVG_Star />
              </div>
              <p style={{
                color: 'rgba(0, 0, 0, 0.6)'
              }}>(1731 reviews)</p>
            </div>
          </div>
          <h2 className={Styles.ProductInformation_Title}>Acne Treatment Cystic Acne heals, repairs & renews</h2>
          <p className={Styles.ProductInformation_Subtitle}>Description:</p>
          <p className={Styles.ProductInformation_Description}>Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>
          <div className={Styles.ProductInformation_Amount}>ITEMS LEFT: 12</div>
          <div style={{
            height: '1px',
            width: '100%',
            maxWidth: '380px',
            background: '#C4C4C4',
            margin: '30px 0'
          }} />
          <div className={Styles.ProductInformation_PriceContainer}>
            <p className={Styles.ProductInformation_PriceOld}>US$25.89</p>
            <p className={Styles.ProductInformation_PriceNew}>$0.00 FREE</p>
          </div>
          <button onClick={() => {
            router.push('/step_1')
          }} className={Styles.ProductInformation_ButtonSelect}>SELECT</button>
          <div className={Styles.ProductInformation_AmazonContainer}>
            <SVG_AmazonPrime />
          </div>
        </section>
      </div>
      <div className={Styles.OverviewContainer}>
        <h2 className={Styles.OverviewTitle}>Overview</h2>
        <ul className={Styles.OverviewList}>
          {
            overviewArrayInformation.map((element, index) => {
              return (
                <li className={Styles.OverviewItem} key={index}>
                  <h4 className={Styles.OverviewItem_Title}>{element.title}</h4>
                  {typeof element.text == 'string' ? <p className={Styles.OverviewItem_Text}>{element.text}</p> : (
                    <ul style={{
                      listStyle: element.listStyle ? 'inside' : 'none'
                    }}>
                      {
                        element.text.map((el, index) => {
                          return (
                            <li className={Styles.OverviewItem_Text} key={index}>{el}</li>
                          )
                        })
                      }
                    </ul>
                  )}
                </li>
              )
            })
          }
        </ul>
        <span style={{
          fontWeight: 'bold',
          color: 'rgba(0, 0, 0, 0.6)'
        }}>Read more...</span>
      </div>
    </>
  )
}

export default Home
