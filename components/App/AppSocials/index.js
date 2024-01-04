'use client'

import styles from './styles.module.scss'
import cn from 'classnames'

import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'

import App from '@/components/App'

function AppSocials({variant = null}) {
  
  const handleClickSocial = (social) => {
    let url = ''

    switch (social) {
      case 'facebook':
        url = 'https://www.facebook.com/profile.php?id=61552613647039'
        break
      case 'whatsapp':
        url = 'https://wa.me/48575649483'
        break
      case 'telegram':
        url = 'https://t.me/+48575649483'
        break
      default:
        return
    }

    window.open(url, '_blank')
  }

  const classes = () => {
    return cn(
      styles.socialLink,
      {[styles[variant]]: variant},
    )
  }

  return (
    <App.Flex gap={variant === 'modal' ? 4 : 16}>
      <App.Flex className={classes()} onClick={() => handleClickSocial('facebook')} center>
        <FacebookIcon width={variant === 'modal' ? 12 : null} height={variant === 'modal' ? 12 : null} />
      </App.Flex>

      <App.Flex className={classes()} onClick={() => handleClickSocial('whatsapp')} center>
        <WhatsAppIcon width={variant === 'modal' ? 12 : null} height={variant === 'modal' ? 12 : null} />
      </App.Flex>

      <App.Flex className={classes()} onClick={() => handleClickSocial('telegram')} center>
        <TelegramIcon width={variant === 'modal' ? 12 : null} height={variant === 'modal' ? 12 : null} />
      </App.Flex>
    </App.Flex>
  )
}
export default AppSocials