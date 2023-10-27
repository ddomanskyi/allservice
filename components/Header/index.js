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
            <App.Text className={styles.logoText} sx={{fontFamily: 'monospace'}}>
              ALL
            </App.Text>
            <Image src="/images/color-logo.png" width={57} height={64} alt="" />
            <App.Text className={cn(styles.logoText, styles.yellow)} sx={{fontFamily: 'monospace'}}>SERVICE</App.Text>
          </App.Flex>

          <App.Flex className={styles.desktopMenu} gap={64}>
            <App.Text className={styles.headerLink} onClick={() => handleClickLink('our-services')}>
              USŁUGI
            </App.Text>
            
            <App.Text className={styles.headerLink} onClick={() => handleClickLink('plans')}>
              PLANY
            </App.Text>
            
            <App.Text className={styles.headerLink} onClick={() => handleClickLink('form')}>
              WRITE TO US
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

            <App.Flex column className={cn(styles.mobileMenuSheet, {[styles.isOpen]: mobileMenuOpen})}>
              <App.Text className={styles.mobileLink} onClick={() => handleClickLink('our-services')}>
                OUR SERVICES
              </App.Text>
              
              <App.Text className={styles.mobileLink} onClick={() => handleClickLink('plans')}>
                PLANS
              </App.Text>
              
              <App.Text className={styles.mobileLink} onClick={() => handleClickLink('form')}>
                WRITE TO US
              </App.Text>
            </App.Flex>
          </App.Flex>
          
          <App.Flex className={styles.filler} sx={{flex: .3}}></App.Flex>
        </App.Flex>
      </App.Container>
    </App.Flex>
  )
}