import styles from './styles.module.scss'
import cn from 'classnames'

const AppCard = ({children, className, ...props}) => {
  const classes = () => {
    return cn(
      className,
      styles.container,
    )
  }

  return (
    <div className={classes()} {...props}>
      { children }
    </div>
  )
}

export default AppCard
