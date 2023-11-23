'use client'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

import App from '@/components/App'

function Form() {
  const [form, setForm] = useState({name: '', email: '', phone: '', message: ''})
  const [error, setError] = useState({email: false, phone: false})
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeForm = (val, field) => {
    setError(state => ({
      ...state,
      [field]: false
    }))
    setForm(state => ({
      ...state,
      [field]: val
    }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const isValid = await handleValidate(form)
    
    if (isValid) {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setForm({name: '', email: '', phone: '', message: ''})
    }
    setIsLoading(false)
  }

  const handleValidate = async form => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    const isValidPhone = /^[0-9]{9}$/.test(form.phone.replace(/\s/g, ''))
    setError(state => ({
      ...state,
      email: ! isValidEmail ? 'Wprowadź poprawny email' : isValidEmail,
      // phone: ! isValidPhone ? 'Wprowadź poprawny telefon' : isValidPhone
    }))
    return isValidEmail
  }
  
  return (
    <div id="form" className={styles.container}>
      <App.Container sx={{height: '100%'}}>
        <App.Flex align="center" justify="space-between" sx={{height: '100%'}} className={styles.formWrapper}>
          <App.Flex column gap={4}>
            <App.Text className={styles.title}>NAPISZ DO NAS</App.Text>
          </App.Flex>
          
          <App.Flex column gap={16} className={styles.form}>
            <App.Flex gap={16} className={styles.inputsWrapper}>
              <App.TextField
                type="text"
                labelFixed
                placeholder="Imię"
                value={form.name}
                onChange={(val) => handleChangeForm(val, 'name')}
              />
              <App.TextField
                type="text"
                labelFixed
                placeholder="Email"
                value={form.email}
                error={error.email}
                onChange={(val) => handleChangeForm(val, 'email')}
              />
              <App.TextField
                type="text"
                labelFixed
                placeholder="Telefon"
                value={form.phone}
                error={error.phone}
                onChange={(val) => handleChangeForm(val, 'phone')}
              />
            </App.Flex>

            <App.TextField
              multiline
              rows={6}
              placeholder="Message"
              value={form.message}
              onChange={(val) => handleChangeForm(val, 'message')}
            />

            <App.Button sx={{height: 64}} onClick={handleSubmit}>
              {
                isLoading
                  ? <App.Loader color="#212121" size={30} />
                  : 'Wysłać'
              }
            </App.Button>
          </App.Flex>
        </App.Flex>
      </App.Container>
    </div>
  )
}
export default Form