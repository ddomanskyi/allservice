'use client'

import styles from './styles.module.scss'

import Slider from 'react-slick'

import App from '@/components/App'

const testimonials = [
  {
    title: 'Anna',
    description: 'Szybka i skuteczna obsługa! Rozwiązał mój problem hydrauliczny w mgnieniu oka.',
    icon: 'repairs'
  },
  {
    title: 'Maria',
    description: 'Godni zaufania elektrycy, gorąco polecam na każde zlecenie.',
    icon: 'plumbing'
  },
  {
    title: 'Katarzyna',
    description: 'Profesjonalna obsługa gazowa. Bezpieczny i doświadczony zespół.',
    icon: 'electricity'
  },
  {
    title: 'Agnieszka',
    description: 'Imponujące naprawy, jakość pracy zawsze na najwyższym poziomie!',
    icon: 'gas'
  },
  {
    title: 'Joanna',
    description: 'Szybka reakcja, doskonała obsługa hydrauliczna. Dziękujemy!',
    icon: 'repairs'
  },
  {
    title: 'Magdalena',
    description: 'Najlepsza elektryka w okolicy. Jesteśmy zachwyceni efektami.',
    icon: 'cleaning'
  },
]

function Testimonials() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  }

  return (
    <div className={styles.container}>
      <App.Container sx={{height: '100%'}}>
        <App.Flex column align="center" justify="center" sx={{height: '100%'}} gap={64}>
          <App.SectionTitle>OPINIE</App.SectionTitle>
          
          <div className={styles.slider}>
            <Slider {...settings}>
              {
                testimonials.map((testimonial, index) => {
                  return (
                    <div key={index}>
                      <App.Flex column center gap={16}>
                        <App.Flex sx={{width: 96, height: 96, borderRadius: 48, background: '#1d1d1d'}}>
                        
                        </App.Flex>
                        
                        <App.Flex column center gap={8} width="90%">
                          <App.Text size={21} weight={700}>{testimonial.title}</App.Text>
                          <App.Text size={16} weight={500} center>{testimonial.description}</App.Text>
                        </App.Flex>
                      </App.Flex>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </App.Flex>
      </App.Container>
    </div>
  )
}
export default Testimonials