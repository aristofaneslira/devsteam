import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  console.log(cart)
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct}/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount='60%'
                fullPrice='99,90'
                discountPrice='39,96'
                onAdd={() => handleAddProduct({ name: 'Legue of Legends', price: 99.9, image: 'league-of-legends.jpg' })}
              />
              <SaleCard
                image={'dota-2.jpg'}
                discount='30%'
                fullPrice='79,90'
                discountPrice='55,93'
                onAdd={() => handleAddProduct({ name: 'Dota 2', price: 79.9, image: 'dota-2.jpg' })}
              />
              <SaleCard
                image={'valorant.jpg'}
                discount='40%'
                fullPrice='199,90'
                discountPrice='119,94'
                onAdd={() => handleAddProduct({ name: 'Valorant', price: 199.9, image: 'valorant.jpg' })}
              />
            </div>
          </div>

          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard 
              onAdd={() => handleAddProduct({ name: 'Counter-Strike', price: 99.9, image: 'counter-strike.jpg' })}
              />
              
            </div>
          </div>
        </Container>

      </div>
    </>
  )
}
