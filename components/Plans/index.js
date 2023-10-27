'use client'

import styles from './styles.module.scss'

import CheckIcon from '@mui/icons-material/Check'

import App from '@/components/App'

const plans = [
  {
    name: 'YEARLY',
    price: '360',
    monthlyPrice: '30',
    items: [
      {
        title: '15% discount for all services',
        additional: false,
      },
      {
        title: 'CPO',
        additional: false,
      },
      {
        title: '200 zł deposit for any service',
        additional: true,
      },
      {
        title: 'One-time "small" repair',
        additional: true,
      },
    ]
  },
  {
    name: 'HALF-YEAR',
    price: '240',
    monthlyPrice: '40',
    items: [
      {
        title: '13% discount for all services',
        additional: false,
      },
      {
        title: 'CPO',
        additional: false,
      },
      {
        title: '100 zł deposit for any service',
        additional: true,
      },
    ]
  },
  {
    name: 'MONTHLY',
    price: '50',
    items: [
      {
        title: '10% discount for all services',
        additional: false,
      },
      {
        title: 'CPO',
        additional: false,
      },
    ]
  },
]

function Plans() {
  const handleScrollToForm = () => {
    const el = document.getElementById('form')
    el.scrollIntoView({behavior: "smooth"})
  }

  return (
    <App.Section id="plans">
      <App.Container sx={{height: '100%'}}>
        <App.Flex column align="center" sx={{height: '100%'}}>
          <App.SectionTitle>PLANY</App.SectionTitle>
          
          <App.Flex sx={{paddingTop: 64}} className={styles.plansWrapper} width="100%" gap={32}>
            {
              plans.map((plan, index) => {
                return (
                  <App.Card key={index} style={{height: 420}} className={styles.planCard}>
                    <App.Flex column justify="space-between" align="center" gap={16} width="100%" height='100%'>
                      <App.Flex column align="center" gap={16} width="100%">
                        <App.Flex>
                          <App.Text size={32} weight={700} color="#1d1d1d">{plan.name}</App.Text>
                        </App.Flex>
                        
                        <App.Flex column center>
                          <App.Text size={42} weight={700} color="#1d1d1d">{plan.price} zł</App.Text>
                          <App.Text size={18} weight={600} color="#1d1d1d">{ plan.monthlyPrice ?? plan.price } zł / month</App.Text>
                        </App.Flex>
                        
                        <App.Flex column center width="100%">
                          {
                            plan.items.map((item, index) => {
                              return (
                                <App.Flex key={index} center className={styles.planItem} gap={4}>
                                  <CheckIcon color={item.additional ? 'success' : ''} />
                                  <App.Text size={16} center color={item.additional ? '#2e7d32' : "#1d1d1d"}>{item.title}</App.Text>
                                </App.Flex>
                              )
                            })
                          }
                        </App.Flex>
                      </App.Flex>
                    </App.Flex>

                    <App.Flex className={styles.planButton} onClick={handleScrollToForm}>
                      <App.Text size={16} weight={700}>
                        ORDER NOW!
                      </App.Text>
                    </App.Flex>
                  </App.Card>
                )
              })
            }
          </App.Flex>
        </App.Flex>
      </App.Container>
    </App.Section>
  )
}
export default Plans