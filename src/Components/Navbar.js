import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="contai">
           <div className="log">
            <img src="logo.png" alt="" height={30} />
             <div className="name"> BETTERmart</div>
             </div>
          
            
            <div className="navcon">
            <Link className="nav-link active" aria-current="page" to="/">
              HOME
            </Link>

            <Link className="nav-link" to="/About">
              ABOUT
            </Link>
            <Link className="nav-link" to="/Products">
              PRODUCTS
            </Link>
            <Link className="nav-link " to="/Contact">CONTACT</Link>
            <button type="button" class="btn btn-primary"  href="#" data-bs-toggle="modal" data-bs-target="#signup-modal">
            Login
            </button>
            <Link className="nav-link" to="/Cart"><img src="cart.png" alt="" height={50} width={50}/></Link>
          </div>
        </div>
      </nav>
    
   
     


              <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="signup-heading" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="signup-heading">Welcome</h1>
                            <h6 class="modal-title bn" id="signup-heading">Sign Up </h6>
                        </div>
            
                        <div class="modal-body">
                            <form id="signup-form" class="form" role="form" method="post" action="api/signup_submit.php">
                            
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input type="email" class="form-control" name="email" placeholder="Email address" required/>
                                </div>
                                  <br />
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" class="form-control" name="password" placeholder="Password" minlength="6" required/>
                                </div>
                                      <br />
            
                                <div class="form-group">
                                    <button type="submit" class="btn btn-block btn-primary">Create Account</button>
                                </div>
                            </form>
                        </div>
            
                        <div class="modal-footer">
                            <span>Already have an account?
                                <a href="#" data-dismiss="modal" data-bs-toggle="modal" data-bs-target="#login-modal">Login</a>
                            </span>
                        </div>
                               
                        <h6 class="modal-title bn" id="signup-heading">OR</h6>       
                        <hr class="hr hr-blurry" />
                        <button type="button" class="btn btn-light"><i class='fab fa-google'></i>   Continue With Google</button>
                        <button type="button" class="btn btn-light"><i class='fab fa-github'></i>  Continue With GitHub</button>
                        <button type="button" class="btn btn-light"><i class='fab fa-linkedin'></i> Continue With LinkedIn</button>
                        
                    </div>
                </div>
            </div>




                  

              <div class="modal fade" id="#login-modal" tabindex="-1" role="dialog" aria-labelledby="signup-heading" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="signup-heading">Welcome</h1>
                            <h6 class="modal-title bn" id="signup-heading">Sign Up </h6>
                        </div>
            
                        <div class="modal-body">
                            <form id="signup-form" class="form" role="form" method="post" action="api/signup_submit.php">
                            
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input type="email" class="form-control" name="email" placeholder="Email address" required/>
                                </div>
                                  <br />
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" class="form-control" name="password" placeholder="Password" minlength="6" required/>
                                </div>
                                      <br />
            
                                <div class="form-group">
                                    <button type="submit" class="btn btn-block btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
            
                        <div class="modal-footer">
                            <span>Don't have an account?
                                <a href="#" data-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup-modal">Sign Up</a>
                            </span>
                        </div>
                               
                        <h6 class="modal-title bn" id="signup-heading">OR</h6>       
                        <hr class="hr hr-blurry" />
                        <button type="button" class="btn btn-light"><i class='fab fa-google'></i>   Continue With Google</button>
                        <button type="button" class="btn btn-light"><i class='fab fa-github'></i>  Continue With GitHub</button>
                        <button type="button" class="btn btn-light"><i class='fab fa-linkedin'></i> Continue With LinkedIn</button>
                        
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Navbar;
