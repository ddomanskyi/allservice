'use client'

import styles from './styles.module.scss'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import App from '@/components/App'

export default function Header() {
  const [pageScrolled, setPageScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => (
      window.removeEventListener('scroll', handleScroll)
    )
  }, [])
  
  const handleScroll = () => {
    setPageScrolled(window.scrollY >= 64)
  }

  const handleClickLink = (id) => {
    setMobileMenuOpen(! mobileMenuOpen)
    const section = document.getElementById(id)
    section.scrollIntoView({behavior: "smooth"})
  }

  const handleClickToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const handleToggleOpen = () => {
    setMobileMenuOpen(! mobileMenuOpen)
  }

  return (
    <App.Flex className={cn(styles.headerContainer, {[styles.isScrolled]: pageScrolled || mobileMenuOpen})}>
      <App.Container>
        <App.Flex align="center" justify="space-between" height="100%">
          <App.Flex align="center" gap={8} sx={{cursor: 'pointer'}} className={styles.desktopLogo} onClick={handleClickToTop}>
            <App.Text className={cn(styles.logoText, styles.grey)} sx={{fontFamily: 'monospace'}}>
              ALL
            </App.Text>
            <App.Flex className={styles.imageWrapper}>
              <Image src="/images/color-logo.png" width={57} height={64} alt="" />
            </App.Flex>
            <App.Text className={cn(styles.logoText, styles.yellow)} sx={{fontFamily: 'monospace'}}>SERVICE</App.Text>
          </App.Flex>

          <App.Flex className={styles.desktopMenu} gap={64}>
            <App.Text className={styles.headerLink} onClick={() => handleClickLink('services')}>
              USŁUGI
            </App.Text>
            
            <App.Text className={styles.headerLink} onClick={() => handleClickLink('plans')}>
              PLANY
            </App.Text>
            
            <App.Text className={styles.headerLink} onClick={() => handleClickLink('form')}>
              NAPISZ DO NAS
            </App.Text>
          </App.Flex>

          <App.Flex className={styles.mobileMenu} gap={64}>
            <div className={cn(styles.mobileMenuButton, {[styles.open]: mobileMenuOpen})} onClick={handleToggleOpen}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <App.Flex column justify="space-between" className={cn(styles.mobileMenuSheet, {[styles.isOpen]: mobileMenuOpen})}>
              <App.Flex column>
                <App.Text className={styles.mobileLink} onClick={() => handleClickLink('services')}>
                  USŁUGI
                </App.Text>
                
                <App.Text className={styles.mobileLink} onClick={() => handleClickLink('plans')}>
                  PLANY
                </App.Text>
                
                <App.Text className={styles.mobileLink} onClick={() => handleClickLink('form')}>
                  NAPISZ DO NAS
                </App.Text>
              </App.Flex>

              <App.Flex column align="center" className={styles.socialsMobile} gap={16}>
                <App.Text className={styles.phone}>
                  <a href="tel:+48575649483">
                    +48 575 649 483
                  </a>
                </App.Text>

                <App.Socials variant="header" />
              </App.Flex>
            </App.Flex>
          </App.Flex>
          
          <App.Flex align="center" className={styles.socials} gap={16}>
            <App.Text className={styles.phone}>
              <a href="tel:+48575649483">
                +48 575 649 483
              </a>
            </App.Text>

            <App.Socials variant="header" />
          </App.Flex>
        </App.Flex>
      </App.Container>
    </App.Flex>
  )
}