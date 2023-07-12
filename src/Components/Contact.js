 import React from "react";
import Footer from "./Footer.js";
// import { AppContext  } from "../Context/ProductContext.js";

export default function Contact() {
  // // const use = useContext(AppContext);
  return (
   
    <div>
         {/* {use} */}
      <div className="immg">
        <img src="loc.png" alt="" height={300} width={1520} />
      </div>
      <div className="formm">
        <h1  className="ff"> Feel Free To Contact Us</h1>
        <form class="form-inline" action="https://formspree.io/f/xjvdjyqb" method="POST">
          <div class="form-group mx-sm-3 mb-2">
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Full Name"
              name="name"
            /> <br />
             <input
              type="email"
              class="form-control"
              id="inputPassword2"
              placeholder="email"
              name="email"
            /> <br />
            <textarea name="text" id="" cols="62" rows="3" placeholder="Enter Your Message"></textarea>
              
          </div>
          <button type="submit" class="btn btn-danger bb">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
