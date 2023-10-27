'use client'

import styles from './styles.module.scss'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'

import App from '@/components/App'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  
  const handleClickLink = (id) => {
    const section = document.getElementById(id)
    section.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <div className={styles.container}>
        <App.Container sx={{height: '100%'}}>
          <App.Flex className={styles.footerStart}>
            <App.Flex column gap={32}>
              <App.Flex column>
                <App.Text sx={{fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#fff', fontSize: 22}}>
                  ALL<span style={{color: '#fccf1e'}}>SERVICE</span>
                </App.Text>
              </App.Flex>

              <App.Flex column gap={8}>
                <App.Text className={styles.textOnDark}>
                  <span className={styles.yellowText}>Phone:</span> +48 1231 2341 234
                </App.Text>

                <App.Text className={styles.textOnDark}>
                  <span className={styles.yellowText}>Email:</span> info@allservice.com.pl
                </App.Text>
              </App.Flex>

              <App.Text className={styles.textOnDark}>
                Always ready to help!
              </App.Text>
            </App.Flex>
            
            <App.Flex column gap={32}>
              <App.Text sx={{letterSpacing: '.3rem', color: '#fff', fontSize: 22}}>
                NAVIGATION
              </App.Text>

              <App.Flex column gap={16}>
                <App.Text className={styles.footerLink} onClick={() => handleClickLink('our-services')}>
                  Our Services
                </App.Text>
                
                <App.Text className={styles.footerLink} onClick={() => handleClickLink('plans')}>
                  Plans
                </App.Text>
                
                <App.Text className={styles.footerLink} onClick={() => handleClickLink('form')}>
                  Write To Us
                </App.Text>
              </App.Flex>
            </App.Flex>
          </App.Flex>
        </App.Container>
      </div>

      <div className={styles.additionalContainer}>
        <App.Container height="100%">
          <App.Flex align="center" justify="space-between" height="100%" className={styles.footerEnd}>
            <App.Text>© {year} ALLSERVICE. All Rights Reserved</App.Text>
            
            <App.Flex gap={16}>
              <App.Flex className={styles.socialLink} center>
                <FacebookIcon />
              </App.Flex>
              <App.Flex className={styles.socialLink} center>
                <InstagramIcon />
              </App.Flex>
              <App.Flex className={styles.socialLink} center>
                <TwitterIcon />
              </App.Flex>
              <App.Flex className={styles.socialLink} center>
                <YouTubeIcon />
              </App.Flex>
              <App.Flex className={styles.socialLink} center>
                <GoogleIcon />
              </App.Flex>
            </App.Flex>
          </App.Flex>  
        </App.Container>
      </div>
    </>
  )
}
export default Footer