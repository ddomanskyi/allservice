import styles from './styles.module.scss'
import cn from 'classnames'

import App from '@/components/App'

const TegroShadowText = ({children, color, shadowColor, size, weight, className, ...props}) => {  
  const classes = () => {
    return cn(
      className,
      styles.text,
    )
  }
  const classesShadow = () => {
    return cn(
      className,
      styles.text,
      styles.shadowText,
    )
  }

  return (
    <div className={styles.textWrapper}>
      <App.Text className={classesShadow()} sx={{color: shadowColor, WebkitTextStroke: `2px ${shadowColor}`, fontSize: size, fontWeight: weight}} {...props}>
        { children }
      </App.Text>
      
      <App.Text className={classes()} sx={{color: color, fontSize: size, fontWeight: weight}} {...props}>
        { children }
      </App.Text>
    </div>
  )
}

export default TegroShadowText
