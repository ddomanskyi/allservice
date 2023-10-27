'use client'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

import WaterDropIcon from '@mui/icons-material/WaterDrop'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import ConstructionIcon from '@mui/icons-material/Construction'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import DescriptionIcon from '@mui/icons-material/Description'
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'

import App from '@/components/App'

const services = [
  {
    title: '24/7 CONSULTATION',
    description: 'We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly.',
    icon: <AccessAlarmIcon sx={{color: '#fff', fontSize: 42}} />
  },
  {
    title: 'PLUMBING',
    description: 'We are doing plumbing works anywhere and quickly. We are doing plumbing works anywhere and quickly. We are doing plumbing works anywhere and quickly.',
    icon: <WaterDropIcon sx={{color: '#fff', fontSize: 42}} />
  },
  {
    title: 'ELECTRICITY',
    description: 'We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly.',
    icon: <ElectricBoltIcon sx={{color: '#fff', fontSize: 42}} />
  },
  {
    title: 'GAS',
    description: 'We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly.',
    icon: <LocalFireDepartmentIcon sx={{color: '#fff', fontSize: 42}} />
  },
  {
    title: 'ANY REPAIRS',
    description: 'We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly.',
    icon: <ConstructionIcon sx={{color: '#fff', fontSize: 42}} />
  },
  {
    title: 'CLEANING',
    description: 'We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly. We are doing repairs works anywhere and quickly.',
    icon: <CleaningServicesIcon sx={{color: '#fff', fontSize: 42}} />
  },
]

function OurServices() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div id="our-services" className={styles.container}>
      <App.Container sx={{height: '100%'}}>
        <App.Flex column align="center" sx={{height: '100%'}}>
          <App.SectionTitle>OUR SERVICES</App.SectionTitle>
          
          <App.Flex gap={42} center className={styles.servicesWrapper}>
            {
              services.map((service, index) => {
                return (
                  <App.Flex key={index} column center gap={16} className={styles.serviceCard}>
                    <App.Flex center className={styles.iconContainer}>
                      <App.Flex center className={styles.front}>
                        {service.icon}
                      </App.Flex>

                      <App.Flex center className={styles.back} onClick={handleOpen}>
                        <DescriptionIcon sx={{color: '#fff', fontSize: 42}} />
                      </App.Flex>
                    </App.Flex>
                    
                    
                    <App.Flex column center gap={8}>
                      <App.Text size={21} weight={700} className={styles.title}>{service.title}</App.Text>
                      <App.Text size={16} weight={500} center sx={{width: 320}}>{service.description}</App.Text>
                    </App.Flex>
                  </App.Flex>
                )
              })
            }
          </App.Flex>

            {/* <App.Flex gap={42}>
              {
                services.slice(-3).map((service, index) => {
                  return (
                    <App.Flex key={index} column center gap={16} className={styles.serviceCard}>
                      <App.Flex center className={styles.iconContainer}>
                        <App.Flex center className={styles.front}>
                          {service.icon}
                        </App.Flex>

                        <App.Flex center className={styles.back} onClick={handleOpen}>
                          <DescriptionIcon sx={{color: '#fff', fontSize: 42}} />
                        </App.Flex>
                      </App.Flex>
                      
                      <App.Flex column center gap={8}>
                        <App.Text size={21} weight={700} className={styles.title}>{service.title}</App.Text>
                        <App.Text size={16} weight={500} center sx={{width: 320}}>{service.description}</App.Text>
                      </App.Flex>
                    </App.Flex>
                  )
                })
              }
            </App.Flex> */}
        </App.Flex>
      </App.Container>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <App.Flex className={styles.modalContainer}>
          <App.Flex className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </App.Flex>

          <App.Text>КОШТОРИС ЗАКАЗИВАЛІ?</App.Text>
        </App.Flex>
      </Modal>
    </div>
  )
}
export default OurServices