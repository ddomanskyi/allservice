'use client'

import styles from './styles.module.scss'

import { Parallax } from 'react-parallax'

import App from '@/components/App'

function Hero() {
  return (
      <Parallax bgImage="/images/hero-bg.jpg" bgImageAlt="" bgImageStyle={{objectFit: 'cover'}} strength={-200} className={styles.parallax}>
        <div className={styles.heroContainer}>
          <App.Flex className={styles.blurBg} />
          
          <App.Container sx={{height: '100%'}}>
            <App.Flex column center sx={{height: '100%'}} gap={16}>
              <App.Text className={styles.heroTitle}>ALLSERVICE</App.Text>
              
              <App.Text className={styles.heroSubtitle}>
                Małe naprawy - duże zmiany: <br /> Twoja przestrzeń w pewnych rękach.
              </App.Text>

              <App.Text className={styles.heroPhone}>
                <a href="tel:+48575649483">
                  +48 575 649 483
                </a>
              </App.Text>

              <App.Socials variant="hero" />
              
            </App.Flex>
          </App.Container>
        </div>
      </Parallax>
  )
}
export default Hero