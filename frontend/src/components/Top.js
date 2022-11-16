import React from 'react';
import "./Top.css";
import {Link} from "react-router-dom";


const Top = ({click, show}) => {
    const top_linksClass = ["top_links"];
    if (show) {
        top_linksClass.push("hide");
        console.log(top_linksClass.join(" "));
    }

  return (
    <nav className='top'>
        <div className='top_hamburgermenu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <Link style={{ textDecoration: 'none' }} to="/">
        <div className="top_title">
            <h3> Tetr4mer's</h3>
            <h2> Bioinformatics Greenhouse </h2>
        </div>
        </Link>


        <ul className={top_linksClass.join(" ")}>
            <li className='top_toggleSideMenu'>
                <i className="fas fa-folder-tree fa-xl" title="Directories" aria-label="Directories" onClick={click}></i>
            </li>
            <li className='top_github'>
                <a href="https://github.com/tetr4mer">
                <i className="fa-brands fa-github fa-xl" title="Github" aria-label="Github"></i>
                </a>
            </li>
            <li>
            <Link to="/About">
                <i className="fas fa-scroll fa-xl" title="About" aria-label="About"> </i>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Top;

