import React from 'react'
import Product from './Product'


export default function Gridview({products}) {
  return (
   
      <div className="container grid grid-three-column">
        {
            products.map((curElem) =>{
                return <Product key={curElem.id} {...curElem} />
            })
        }
      </div>
   
  )
}
