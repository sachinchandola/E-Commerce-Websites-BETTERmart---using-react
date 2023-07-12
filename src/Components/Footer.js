import React from "react";

function Footer() {
  return (
    <div className="contain">
      <div className="box1">
        <div className="box11">
          <h6 className="hs">Trusted By1000+ Companies</h6>
          <div className="imm">
            <img src="b1.png" alt="" height={50} width={50} />
            <img src="b2.png" alt="" height={50} width={50} />
            <img src="b3.png" alt="" height={50} width={50} />
            <img src="b4.png" alt="" height={50} width={50} />
            <img src="b5.png" alt="" height={50} width={50} />
          </div>
        </div>
      </div>


         {/* // mid div */}
    <div className="mid">
        Ready to get started? <br />
        Talk to us today

        <div>
        <button type="button" class="btn btn-primary">GET STARTED</button>
        </div>
    </div>





    
      {/* actual footer */}

      <div className="box2">
      <div className="box22">
        <div className="intr">
          BETTERmart Store <br /> <br />
          GET START YOUR FAVORITE SHOPING
        </div>
        <div className="sub">
          Subscribe to get important updates<br /> <br />
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="email"
                class="form-control"
                id="inputPassword2"
                placeholder="email"
              />
            </div>
            <button type="submit" class="btn btn-primary mb-2">
              Confirm identity
            </button>
          </form>
        </div>
        <div className="follow">
          Follow Us 
          <div className="icon">
          <i class="fa fa-linkedin-square"></i>
          <i class="fa fa-simplybuilt"></i>
          <i class="fa fa-telegram"></i>
          </div>
        </div>
        <div className="call">
          Call Us <br />
          <br />
          +91 2138499383
        </div>
        </div>
      <div className="foot">
      <div>
        @2023 BETTERmartTechnical. All Right Reserved 
        </div>
        <div> PRIVACY POLOCY : TERM & CONDITIONS</div>
      </div>
      </div>

    </div>
  );
}
export default Footer;
