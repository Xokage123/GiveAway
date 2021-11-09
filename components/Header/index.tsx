// Next
import Image from 'next/image'
// Image
import LOGO from '../../public/image/banner_picture.png'
// Helpers
import useWindowSize from '../../helpers/useWindowSizeHook'
// Styles
import Styles from './style.module.scss'
import { useCallback } from 'react'

export const HeaderComponent: React.FC = () => {
  const { width } = useWindowSize()

  const generateELement = useCallback(() => {
    return width >= 1279 ? (
      <Image layout="fixed" width={440} height={165} alt="logo" src={LOGO}></Image>
    ) : (
        <Image layout="fixed" width={240} height={90} alt="logo" src={LOGO}></Image>
    );
  }, [width])
  return (
    <header className={Styles.Header}>
      <div className={[Styles.HeaderContainer].join(" ")}>
        <section className={Styles.HeaderText}>
          <h1 className={Styles.HeaderText_Title}>Autumn Giveaways for FREE</h1>
          <p className={Styles.HeaderText_Description}>Participate in Autumn Giveaway and
            treat yourself
            to nice and refreshing
            cosmetics for free
          </p>
        </section>
        {generateELement()}
      </div>
    </header>
  )
}