import styles from './styles.module.scss'

const AppSection = ({ children, ...props }) => {
  return (
    <div className={styles.section} {...props}>
      {children}
    </div>
  )
}

export default AppSection