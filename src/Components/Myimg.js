import React, { useState } from 'react'

export default function Myimg({ imgs = [{url:""}]}) {
    const [img, setimg ] = useState(imgs[0])
    
  return ( 

    <div className='coimg'>
    <div>
      { 
        imgs.map((curElm, index) => {
        return(
            <figure>
            <img src={curElm.url} alt={curElm.filename} className="boximg" key={index}  onClick={()=>setimg(curElm)}/>
            </figure>
        );
      })}
      </div>
      <div className='dvv'>
        <img src={img.url} alt={img.filename } className="mainimg" />
    </div>
    </div>
   
  )
}
