import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(curElem) {
  const {id, name,image, price,category}= curElem;
  return <Link to={`/singleproduct/${id}`}>
         <div className="card">
          <figure>
            <img src={image} alt={name} height={200} width={230}/>
            <figcaption className='caption'>{category}</figcaption>
          </figure>
          <div className="card-data">
            <div className="card-data-flex">
              <h6>{name}</h6>
              <p className="card-data--price">₹ {price}</p>
            </div>
          </div>
         </div>
  </Link>
}
