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
  
  const handleClickSocial = (social) => {
    let url = ''

    switch (social) {
      case 'facebook':
        url = 'https://www.facebook.com/profile.php?id=61552613647039'
        break
      default:
        return
    }

    window.open(url, '_blank')
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

              <App.Flex column gap={16}>
                <App.Text className={styles.textOnDark}>
                  <span className={styles.yellowText}>Telefon: </span>
                  <a href="tel:+48575649483">
                    +48 575 649 483
                  </a>
                </App.Text>

                <App.Text className={styles.textOnDark}>
                <span className={styles.yellowText}>Email: </span>
                  <a href="mailto:info@allservice.com.pl">info@allservice.com.pl</a>
                </App.Text>
              </App.Flex>

              <App.Text className={styles.textOnDark}>
                Zawsze gotowy do pomocy!
              </App.Text>
            </App.Flex>
            
            <App.Flex column gap={32}>
              <App.Text sx={{letterSpacing: '.3rem', color: '#fff', fontSize: 22}}>
                NAWIGACJA
              </App.Text>

              <App.Flex column gap={16}>
                <App.Text className={styles.footerLink} onClick={() => handleClickLink('our-services')}>
                  Usługi
                </App.Text>
                
                <App.Text className={styles.footerLink} onClick={() => handleClickLink('plans')}>
                  Plany
                </App.Text>
                
                <App.Text className={styles.footerLink} onClick={() => handleClickLink('form')}>
                  Napisz Do Nas
                </App.Text>
              </App.Flex>
            </App.Flex>
          </App.Flex>
        </App.Container>
      </div>

      <div className={styles.additionalContainer}>
        <App.Container height="100%">
          <App.Flex align="center" justify="space-between" height="100%" className={styles.footerEnd}>
            <App.Flex column center gap={4} className={styles.mobileVisible}>
              <App.Text>© {year} All Rights Reserved</App.Text>
              <App.Text weight={700}>ALLSERVICE</App.Text>
            </App.Flex>
            
            <App.Flex column center gap={4} className={styles.desktopVisible}>
              <App.Text>© {year} ALLSERVICE. Wszelkie prawa zastrzeżone</App.Text>
            </App.Flex>
            
            <App.Flex gap={16}>
              <App.Flex className={styles.socialLink} onClick={() => handleClickSocial('facebook')} center>
                <FacebookIcon />
              </App.Flex>
              {/* <App.Flex className={styles.socialLink} center>
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
              </App.Flex> */}
            </App.Flex>
          </App.Flex>  
        </App.Container>
      </div>
    </>
  )
}
export default Footer