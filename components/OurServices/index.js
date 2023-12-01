'use client'

import styles from './styles.module.scss'
import { useState } from 'react'
import Image from 'next/image'

import WaterDropIcon from '@mui/icons-material/WaterDrop'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import ConstructionIcon from '@mui/icons-material/Construction'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import HouseIcon from '@mui/icons-material/House';
import DescriptionIcon from '@mui/icons-material/Description'
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'

import App from '@/components/App'

const services = [
  {
    title: 'domowe',
    icon: <HouseIcon sx={{color: '#fff', fontSize: 42}} />,
    services: [
      {
        name: 'Naprawa / wymiana / montaż klamki drzwiowej',
        price: 'od 60',
      },
      {
        name: 'Montaż / wymiana cylindra zamka drzwiowego',
        price: 'od 80',
      },
      {
        name: 'Regulacja drzwi wewnętrznych',
        price: 'od 30 / szt.',
      },
      {
        name: 'Naprawa drzwi wewnętrznych',
        price: 'od 100',
      },
      {
        name: 'Naprawa kanap i łóżek',
        price: 'od 100',
      },
      {
        name: 'Montaż mebli (cena % od wartości mebli)',
        price: '20%',
      },
      {
        name: 'Naprawa szafy wnękowej',
        price: 'od 100',
      },
      {
        name: 'Wymiana / montaż zawiasów na drzwiczkach',
        price: 'od 30',
      },
      {
        name: 'Wymiana uchwytów meblowych',
        price: 'od 15 / szt.',
      },
      {
        name: 'Montaż półek',
        price: 'od 30',
      },
      {
        name: 'Montaż obrazu',
        price: 'od 20',
      },
      {
        name: 'Montaż telewizora na ścianie',
        price: 'od 100',
      },
      {
        name: 'Montaż luster wszystkich rodzajów',
        price: 'od 100',
      },
      {
        name: 'Regulacja okien',
        price: 'od 40 / szt.',
      },
      {
        name: 'Wymiana okuć okiennych',
        price: 'od 40 / szt.',
      },
      {
        name: 'Montaż karnisza',
        price: 'od 35 / m',
      },
      {
        name: 'Montaż rolet i żaluzji okiennych',
        price: 'od 50 / szt.',
      },
      {
        name: 'Brak na liście napraw do uzgodnienia z specjalistą',
        price: 'od 100',
      },
    ]
  },
  {
    title: 'hydrauliczne',
    icon: <WaterDropIcon sx={{color: '#fff', fontSize: 42}} />,
    services: [
      {
        name: 'Instalacja i podłączenie pralki',
        price: 'od 120',
      },
      {
        name: 'Instalacja i podłączenie zmywarki',
        price: 'od 120',
      },
      {
        name: 'Instalacja i podłączenie wanny',
        price: 'od 250',
      },
      {
        name: 'Demontaż wanny',
        price: 'od 100',
      },
      {
        name: 'Instalacja bidetu',
        price: 'od 240',
      },
      {
        name: 'Instalacja umywalki',
        price: 'od 170',
      },
      {
        name: 'Instalacja sedesu',
        price: 'od 240',
      },
      {
        name: 'Instalacja pisuaru',
        price: 'od 170',
      },
      {
        name: 'Demontaż bidetu / umywalki / sedesu / pisuaru',
        price: 'od 140',
      },
      {
        name: 'Wymiana mechanizmu spustowego / napełniającego zbiornika sedesu',
        price: 'od 120',
      },
      {
        name: 'Wymiana / instalacja węży do baterii',
        price: 'od 25',
      },
      {
        name: 'Wymiana i podłączenie baterii',
        price: 'od 100',
      },
      {
        name: 'Wymiana kranu wodnego',
        price: 'od 70',
      },
      {
        name: 'Wymiana / instalacja syfonu umywalki',
        price: 'od 60',
      },
      {
        name: 'Czyszczenie kanalizacji',
        price: 'od 300',
      },
      {
        name: 'Czyszczenie kanalizacji umywalki / zlewu',
        price: 'od 100',
      },
      {
        name: 'Montaż wentylatora w łazience',
        price: 'od 30',
      },
      {
        name: 'Montaż kabiny prysznicowej',
        price: 'od 350',
      },
      {
        name: 'Demontaż kabiny prysznicowej',
        price: 'od 100',
      },
      {
        name: 'Montaż panelu prysznicowego',
        price: 'od 150',
      },
      {
        name: 'Demontaż panelu prysznicowego',
        price: 'od 100',
      },
      {
        name: 'Hydroizolacja spoin instalacji sanitarnej',
        price: 'od 20 / m',
      },
      {
        name: 'Montaż grzejnika',
        price: 'od 120',
      },
      {
        name: 'Demontaż grzejnika',
        price: 'od 80',
      },
      {
        name: 'Regulacja ciśnienia i odpowietrzanie w systemie ogrzewania',
        price: 'od 50',
      },
      {
        name: 'Diagnostyka instalacji hydraulicznej',
        price: '300',
      },
      {
        name: 'Brak na liście napraw do uzgodnienia z specjalistą',
        price: 'od 100',
      },
    ]
  },
  {
    title: 'elektryczne',
    icon: <ElectricBoltIcon sx={{color: '#fff', fontSize: 42}} />,
    services: [
      {
        name: 'Realizacja punktu elektrycznego',
        price: 'od 50',
      },
      {
        name: 'Wykonanie rowka pod kabel',
        price: 'od 5 / m',
      },
      {
        name: 'Wymiana automatycznego wyłącznika',
        price: 'od 120',
      },
      {
        name: 'Wymiana różnicowoprądowego automatu / przekaźnika napięcia',
        price: 'od 140',
      },
      {
        name: 'Wymiana żarówki',
        price: 'od 10',
      },
      {
        name: 'Montaż / wymiana gniazdka elektrycznego',
        price: 'od 25',
      },
      {
        name: 'Montaż / wymiana włącznika światła',
        price: 'od 25',
      },
      {
        name: 'Montaż / wymiana żyrandola, lampy',
        price: 'od 60',
      },
      {
        name: 'Montaż / wymiana punktowego oświetlenia, kinkietu',
        price: 'od 70',
      },
      {
        name: 'Naprawa połączeń elektrycznych',
        price: 'od 50',
      },
      {
        name: 'Podłączenie kuchenki elektrycznej',
        price: 'od 150',
      },
      {
        name: 'Naprawa żyrandola / oświetlenia',
        price: 'od 100',
      },
      {
        name: 'Montaż taśmy LED',
        price: 'od 60 / m',
      },
      {
        name: 'Diagnostyka instalacji elektrycznej',
        price: '300',
      },
      {
        name: 'Brak na liście napraw do uzgodnienia z specjalistą',
        price: 'od 100',
      },
    ]
  },
  {
    title: 'gazowe',
    icon: <LocalFireDepartmentIcon sx={{color: '#fff', fontSize: 42}} />,
    services: [
      {
        name: 'Rewizja zaworu gazowego',
        price: 'od 30',
      },
      {
        name: 'Rewizja złączki mufowej',
        price: 'od 30',
      },
      {
        name: 'Rewizja połączeń kotła gazowego / podgrzewacza wody / konwektora',
        price: 'od 70',
      },
      {
        name: 'Wymiana zaworu gazowego',
        price: 'od 60',
      },
      {
        name: 'Wymiana węża gazowego',
        price: 'od 60',
      },
      {
        name: 'Diagnostyka instalacji gazowej i wentylacji',
        price: '300',
      },
      {
        name: 'Brak na liście napraw do uzgodnienia z specjalistą',
        price: 'od 100',
      },
    ]
  },
  {
    title: 'remontowe',
    icon: <ConstructionIcon sx={{color: '#fff', fontSize: 42}} />,
    services: [
      {
        name: 'Malowanie ścian',
        price: 'od 20 / m²',
      },
      {
        name: 'Malowanie drzwi (dwa warstwy)',
        price: 'od 60 / m²',
      },
      {
        name: 'Malowanie ogrodzenia',
        price: 'od 50 / m',
      },
      {
        name: 'Malowanie grzejników',
        price: 'od 15 / szt.',
      },
      {
        name: 'Malowanie rur grzewczych/kanalizacyjnych/gazowych',
        price: 'od 10 / m',
      },
      {
        name: 'Zabezpieczenie mieszkania podczas malowania',
        price: 'od 3 / m',
      },
      {
        name: 'Podkładanie ścian i sufitów',
        price: 'od 3 / m²',
      },
      {
        name: 'Szpachlowanie ścian i sufitów',
        price: 'od 20 / m²',
      },
      {
        name: 'Układanie laminatu',
        price: 'od 20 / m²',
      },
      {
        name: 'Demontaż laminatu',
        price: 'od 10 / m²',
      },
      {
        name: 'Układanie wykładziny',
        price: 'od 20 / m²',
      },
      {
        name: 'Montaż listew przypodłogowych',
        price: 'od 15 / m',
      },
      {
        name: 'Demontaż listew przypodłogowych',
        price: 'od 3 / m',
      },
      {
        name: 'Montaż progu',
        price: 'od 30 / szt.',
      },
      {
        name: 'Demontaż progu',
        price: 'od 10 / szt.',
      },
      {
        name: 'Zrywanie tapetu',
        price: 'od 18 / m²',
      },
      {
        name: 'Gruntowanie ścian, sufitów, podłóg',
        price: 'od 7 / m²',
      },
      {
        name: 'Brak na liście napraw do uzgodnienia z specjalistą',
        price: 'od 100',
      },
    ]
  },
  {
    title: 'sprzątanie',
    icon: <CleaningServicesIcon sx={{color: '#fff', fontSize: 42}} />,
    services: [
      {
        name: 'Sprzątanie standardowe',
        price: '3.5 / m²',
      },
    ]
  },
]

function OurServices() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({})

  const handleOpen = (service) => {
    setOpen(true)
    setSelected(service)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <App.Section id="services">
      <App.Container sx={{height: '100%'}}>
        <App.Flex column align="center" sx={{height: '100%'}}>
          <App.SectionTitle>USŁUGI</App.SectionTitle>
          
          <App.Flex gap={42} center className={styles.servicesWrapper}>
            {
              services.map((service, index) => {
                return (
                  <App.Flex key={index} column center gap={16} className={styles.serviceCard} onClick={() => handleOpen(service)}>
                    <App.Flex center className={styles.iconContainer}>
                      <App.Flex center className={styles.front}>
                        {service.icon}
                      </App.Flex>

                      <App.Flex center className={styles.back}>
                        <DescriptionIcon sx={{color: '#fff', fontSize: 42}} />
                      </App.Flex>
                    </App.Flex>
                    
                    <App.Flex column center gap={8}>
                      <App.Text size={21} weight={700} className={styles.title}>{service.title}</App.Text>
                      {/* <App.Text size={16} weight={500} center sx={{width: 320}}>{service.description}</App.Text> */}
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
        <div className={styles.modalContainer}>
          <App.Flex className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </App.Flex>

          <App.Flex align="center" justify="space-between">
            <App.Text center size={24} weight={700} className={styles.modailTitle} sx={{textTransform: 'uppercase'}}>
              Usługi {selected.title}
            </App.Text>

            <App.Flex align="center" gap={8}>
              <App.Flex column align="flex-end">
                <App.Text className={styles.phone}>
                  <a href="tel:+48575649483">
                    +48 575 649 483
                  </a>
                </App.Text>

                <App.Socials variant="modal" />
              </App.Flex>

              <App.Flex column center>
                <Image src="/images/color-logo.png" width={57} height={64} alt="" />
                <App.Text weight={800} size={9}>ALLSERVICE</App.Text>
              </App.Flex>
            </App.Flex>
          </App.Flex>

          {
            selected.services
              ? <App.Table rows={selected.services} />
              : null
          }
        </div>
      </Modal>
    </App.Section>
  )
}
export default OurServices