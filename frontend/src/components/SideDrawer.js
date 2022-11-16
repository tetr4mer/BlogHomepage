import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    const sidedrawer_linksClass = ["sidedrawer_links"];
    if (show) {
        sideDrawerClass.push("show");
        sidedrawer_linksClass.push("show");
        console.log(sideDrawerClass.join(" "));
    }

  return (
    <div className={sideDrawerClass.join(" ")}> 
    
        <ul className="sidedrawer_nav" onClick={click}>
            <li>
                <Link to="/">
                    <i className="fa-solid fa-house-user fa-xl" title="home" aria-label="About"> </i>
                </Link>
            </li>
            <li>
                <Link to="/About">
                    <i className="fas fa-scroll fa-xl" title="About" aria-label="About"> </i>
                </Link>
            </li>
            <li>
                <a href="https://github.com/tetr4mer">
                    <i className="fa-brands fa-github fa-xl" title="Github" aria-label="Github"></i>
                </a>
            </li>
            <li id="sidedrawer_x">
                <i  className="fa-solid fa-x fa-xl"></i>
            </li>
        </ul>
    
        <ul className={sidedrawer_linksClass.join(" ")} onClick={click}>
            <li>
                <Link to="/projects"><i className="fa-solid fa-wrench fa-lg"></i>&nbsp;Projects</Link> 
            </li>
            <li>
                <Link to="/technicalnotes"><i className="fa-solid fa-dna"></i>&nbsp;Technical Notes</Link> 
            </li>
            <li>
                <i className="fa-solid fa-notebook"></i>
                <Link to="/generaltech"><i className="fa-solid fa-computer"></i>&nbsp;General Tech Notes</Link> 
            </li>
        </ul>
    
    </div>
  )


}


export default SideDrawer