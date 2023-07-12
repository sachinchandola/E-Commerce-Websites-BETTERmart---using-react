import React from "react";

function Shopnow(props) {
  return (
    <div className="shop">
      <div className="shopnow">
      <div className="inshop">
        <h6 className="head">WELCOME TO</h6>
        <h1 className="headd">{props.t}</h1>
        <p className="pp">GET START YOUR FAVORITE SHOPING</p>
        <button type="button" class="btn btn-danger">
          SHOP NOW
        </button>
        </div>
        <div className="oushop">
        <img src="model1.jpg" alt="" height={300} width={400} />
      
      </div>
      </div>

      

      
    </div>
  );
}

export default Shopnow;
