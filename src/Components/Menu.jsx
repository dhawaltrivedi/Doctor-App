import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Menu = ({loginData }) => {
     const [MenuContent, setMenuContent] = useState();
     console.log(loginData);
     const navigate = useNavigate();
     console.log(loginData);
     const handleNavigation = () => {
          navigate("/");
     }
     useEffect(() => {
          if (localStorage.getItem("token") == undefined) {
               setMenuContent(
                    <>
                         <section class="navbar navbar-default navbar-static-top" role="navigation">
                              <div class="container">
                                   <div class="navbar-header">
                                        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                             <span class="icon icon-bar"></span>
                                             <span class="icon icon-bar"></span>
                                             <span class="icon icon-bar"></span>
                                        </button>


                                        <a href="index.html" class="navbar-brand"><i class="fa fa-h-square"></i>ealth Center</a>
                                   </div>
                                   <div class="collapse navbar-collapse">
                                        <ul class="nav navbar-nav navbar-right">
                                             <li><a href="/" class="smoothScroll" onClick={handleNavigation}>Home</a></li>
                                             <li><a href="#about" class="smoothScroll" onClick={handleNavigation}>About Us</a></li>
                                             <li><a href="#news" class="smoothScroll" onClick={handleNavigation}>News</a></li>
                                             <li><Link to="/login" class="smoothScroll">Login</Link></li>
                                             <li><a href="#google-map" class="smoothScroll">Contact</a></li>
                                             <li class="appointment-btn"><a href="/registration">Registration</a></li>
                                        </ul>
                                   </div>
                              </div>
                         </section>

                    </>
               )
          }

          else if (localStorage.getItem("role")=="admin") {
               setMenuContent(
                    <>
                     <section class="navbar navbar-default navbar-static-top" role="navigation">
                    <div class="container">
                         <div class="navbar-header">
                              <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                   <span class="icon icon-bar"></span>
                                   <span class="icon icon-bar"></span>
                                   <span class="icon icon-bar"></span>
                              </button>


                              <a href="index.html" class="navbar-brand"><i class="fa fa-h-square"></i>ealth Center</a>
                         </div>
                         <div class="collapse navbar-collapse">
                              <ul class="nav navbar-nav navbar-right">
                                   <li><a href="/" class="smoothScroll" onClick={handleNavigation}>Admin Home</a></li>
                                   <li><a href="#about" class="smoothScroll" onClick={handleNavigation}>User List</a></li>
                                   <li><a href="/logout" class="smoothScroll" onClick={handleNavigation}>Logout</a></li>

                              </ul>
                         </div>

                    </div>
               </section>

                    </>
               )
              
          }
          else if (localStorage.getItem("role")=="user") {
               setMenuContent(
                    <>
                    <section class="navbar navbar-default navbar-static-top" role="navigation">
                    <div class="container">
                         <div class="navbar-header">
                              <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                   <span class="icon icon-bar"></span>
                                   <span class="icon icon-bar"></span>
                                   <span class="icon icon-bar"></span>
                              </button>


                              <a href="index.html" class="navbar-brand"><i class="fa fa-h-square"></i>ealth Center</a>
                         </div>
                         <div class="collapse navbar-collapse">
                              <ul class="nav navbar-nav navbar-right">
                                   <li><a href="/" class="smoothScroll" onClick={handleNavigation}>User Home</a></li>
                                   <li><a href="/logout" class="smoothScroll" onClick={handleNavigation}>Logout</a></li>
                                  
                              </ul>
                         </div>

                    </div>
               </section>
                    </>
               )
               
          }

     },[loginData])
     return (
          <>
          {MenuContent}
          </>
     )
} 