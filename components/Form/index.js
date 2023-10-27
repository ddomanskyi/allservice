'use client'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

import App from '@/components/App'

function Form() {
  const [form, setForm] = useState({name: '', email: '', phone: '', message: ''})

  const handleChangeForm = (val, field) => {
    setForm(state => ({
      ...state,
      [field]: val
    }))
  }

  const handleSubmit = () => {
    console.log('SUBMIT!', form);
    setForm({name: '', email: '', phone: '', message: ''})
  }
  
  return (
    <div id="form" className={styles.container}>
      <App.Container sx={{height: '100%'}}>
        <App.Flex align="center" justify="space-between" sx={{height: '100%'}} className={styles.formWrapper}>
          <App.Flex column gap={4}>
            <App.Text size={24} className={styles.title}>For instant contact</App.Text>
            <App.Text className={styles.title}>WRITE TO US</App.Text>
            <App.Text size={32} className={styles.title}>and make your booking</App.Text>
          </App.Flex>
          
          <App.Flex column gap={16} fullWidth>
            <App.Flex gap={16} className={styles.inputsWrapper}>
              <App.TextField
                type="text"
                // label="Name"
                labelFixed
                placeholder="Your Name"
                value={form.name}
                onChange={(val) => handleChangeForm(val, 'name')}
              />
              <App.TextField
                type="text"
                labelFixed
                placeholder="Your Email address"
                value={form.email}
                onChange={(val) => handleChangeForm(val, 'email')}
              />
              <App.TextField
                type="text"
                labelFixed
                placeholder="Your Phone number"
                value={form.phone}
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
              Submit
            </App.Button>
          </App.Flex>
        </App.Flex>
      </App.Container>
    </div>
  )
}
export default Form