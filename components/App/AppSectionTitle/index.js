import cn from 'classnames'

import App from '@/components/App'

import styles from './styles.module.scss'

const AppSectionTitle = ({ children, sx = {} }) => {
  return (
    <App.Text center className={styles.sectionTitle}>
      {children}
    </App.Text>
  )
}

export default AppSectionTitle