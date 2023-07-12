 import React from 'react'
 

import Shopnow from './Shopnow.js';
  import Deals from './Deals.js';
  import Shipping from './Shipping.js';
import Footer from './Footer.js';

export default function Home() {
  return (
    <div className='con'>
  
   <Shopnow t="BETTERmart Store"/>
    <Deals/>
    <Shipping/>
    <Footer/> 
    </div>
  )
}
