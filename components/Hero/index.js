'use client'

import styles from './styles.module.scss'

import { Parallax } from 'react-parallax'

import App from '@/components/App'

function Hero() {
  return (
    <Parallax bgImage="/images/temp-hero.jpg" bgImageAlt="" strength={-200} className={styles.parallax}>
      <div className={styles.heroContainer}>
        <App.Container sx={{height: '100%'}}>
          <App.Flex column center sx={{height: '100%'}} gap={16}>
            <App.Text className={styles.heroTitle}>ALLSERVICE</App.Text>
            <App.Text className={styles.heroSubtitle}>
              At Construction we strive to excel in every service we provide,<br />
              adding value for our customers wherever possible,
              and thereby attaining national leadership<br /> in the construction industry.
            </App.Text>
          </App.Flex>
        </App.Container>
      </div>
    </Parallax>
  )
}
export default Hero