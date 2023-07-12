import React from 'react'
import Filter from './Filter'
import Productlist from './Productlist'
import Footer from "./Footer.js"

export default function Products() {
  return (
    <div className="hr"> 
    <h1>Available products</h1>
    <div className='big'>
    
    <div className="filter">
      <Filter/>
    </div>
    <div className="product">
      <Productlist/>
      </div>
    </div>
    <Footer />
    </div>
  
  )
}
