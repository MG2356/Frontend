import React from 'react'
import Carousel from '../Carousel/Carousel'
import BannerBottom from '../Banner/BannerBottom'
import SearchBar from '../SearchBar/SearchBar'
import Products from '../Product/Products'
import Footer from '../Footer/Footer'

function Home() {
  return (
<>
<Carousel />
      <BannerBottom />
      <SearchBar />
      <Products/>
      <Footer />
</>  )
}

export default Home