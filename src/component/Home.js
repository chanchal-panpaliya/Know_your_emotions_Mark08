import { Component } from "react";
import '../css/home-emoji.css';
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 

import ContactUs from '../Pages/ContactUs.js';
import SearchSymbols from "../Pages/SearchSymbols";
import AllSymbols from "../Pages/AllSymbols";
import AboutEmoji from "../Pages/AboutEmoji";

import FacebookIcon from '../img/icons/facebook.png';
import TwitterIcon from '../img/icons/twitter.png';
import LinkedInIcon from '../img/icons/linkedin.png';
import GithubIcon from '../img/icons/github.png'; 

class Home extends Component{
    HOMErender=()=>{
        return(
            <div className="emoji-container">
                <BrowserRouter>
               <div className="nav-emoji-header-container">
                    <div className="nav-emoji-header">
                         <span className="nav-emoji-header-title"> 😁moG </span> 
                         <span className="nav-emoji-header-link-container"> 
                            <ul className="nav-emoji-header-link">
                                <li className="nav-emoji-header-link-name"> 
                                    <Link to="/" className="nav-emoji-header-link-page"> Search Symbols </Link> 
                                </li>
                                <li className="nav-emoji-header-link-name"> 
                                    <Link to="/allsymbols" className="nav-emoji-header-link-page"> All Symbols </Link> 
                                </li> 
                                <li className="nav-emoji-header-link-name"> 
                                    <Link to="/aboutemoji" className="nav-emoji-header-link-page"> About Emoji </Link> 
                                </li> 
                                {/* <li className="nav-emoji-header-link-name"> 
                                    <Link to="/contactus" className="nav-emoji-header-link-page"> Contact Us </Link> 
                                </li>  */}
                            </ul>
                         </span>  
                    </div>
               </div> 
               <div className="emoji-search-heading-text">
                   <section> Are you looking for Emoji symbols? <br/>
                    If yes, 
                    then you are on the right website because we have collected all Emoji symbols in one place .<br/>
                    </section>
                   
               </div>
               <div>
               <Switch>
                    <Route exact path="/" component={SearchSymbols}/>
                    <Route path="/allsymbols" component={AllSymbols}/>
                    <Route path="/aboutemoji" component={AboutEmoji}/>
                    <Route path="/contactus" component={ContactUs}/>
                </Switch> 
                </div>
               </BrowserRouter>
            </div>
        )
    }
    render(){
        return(
            <div className="container-emoji">
            <div className="background-emoji">
              <div style={{width:'-webkit-fill-available',position:'fixed'}}>
                  <div className="menu__logoSpace"> 
                      <a href="/" className="menu__logo"> Creator Space </a>
                  </div>
                  <div className="menu__socialItems">
                  <a className="menu__socialLink" target="_blank" href='https://www.facebook.com/chanchal.panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={FacebookIcon} alt="facebooklink"/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <img style={{width:'8%',paddingTop:'2%'}} src={TwitterIcon} alt="twitterlink"/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                       <img style={{width:'8%',paddingTop:'2%'}} src={LinkedInIcon} alt="linkedinlink"/>
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={GithubIcon} alt="githublink"/>
                    </span>
                </a>
              </div>
              </div>
            </div>
            <div className="body-frame-emoji">
               { this.HOMErender()}
            </div> 
        </div>
        )
    }
}

export default Home