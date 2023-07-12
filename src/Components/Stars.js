import React from 'react'


export default function Stars({stars, reviews}) {
        // this  make array
    const rating = Array.from({length:5}, (elem, index)=>{

        let number = index + 0.5;

        return <span key={index}>
            {
             stars >= index+1 ? (<i class="fa fa-star"></i>) : stars >= number ? (<i class="fa fa-star-half-o"></i>) : (<i class="fa fa-star-o"></i>)
            }
        </span>
    })
     
  return (
    <div>
      {rating}{/* array of span icon */}
     <p>{reviews} customer reviews</p>
    </div>
  )
}
