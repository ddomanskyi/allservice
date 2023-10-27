import cn from 'classnames'

import App from '@/components/App'

import styles from './styles.module.scss'

const AppSectionTitle = ({ children, sx = {} }) => {
  return (
    <App.ShadowText color="#1d1d1d" shadowColor="#fccf1e" weight={700} className={styles.sectionTitle}>
      {children}
    </App.ShadowText>
  )
}

export default AppSectionTitle