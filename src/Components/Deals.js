import React , {useContext} from 'react'
import { AppContext  } from "../Context/ProductContext.js";
import Product from './Product.js';

function Deals() {
  const {isLoading, featureProducts} = useContext(AppContext);
 
  if(isLoading){
     return <div> .. ....Loading</div>
  }
 
  return (
     <div className='deals'>
     <h1 className="font-effect-neon he">Deals Of The Day</h1> 
     <div className='grid grid-three-column'>  
      {
           featureProducts.map((curElem)=>{
            return <Product key={curElem.id} {...curElem}/>;
           })
      }
      
      </div>
    </div>
  )
}

export default Deals; 
