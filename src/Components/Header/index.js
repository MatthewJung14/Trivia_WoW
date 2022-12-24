import React from 'react';
import {useNavigate} from 'react-router-dom';
import {HashLink as Link} from "react-router-hash-link";
import { useRef } from 'react';

import logo from '../../images/MyName.png';


import './Header.css'

const Header = () => {
    let navigate = useNavigate();
    const home = useRef(null);
    const setting = useRef(null);
    const contact = useRef(null);

    const scroll = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }

    return (
        <body>
            <header class="head">
                <nav class="nav">
                {/* <button onClick={() => {navigate("/")}} class="port__btn"><a href="#home" class="nav__link">Home</a></button>
                <button onClick={() => {navigate("/")}} class="port__btn"><a href="#portfolio" class="nav__link">Settings</a></button>
                <button onClick={() => {navigate("/")}} class="port__btn"><a href="#contacts" class="nav__link">Contact</a></button> */}
                    <u1 class="nav__list">
                    <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#home" class="nav__link">Home</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#portfolio" class="nav__link">Settings</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#contacts" class="nav__link">Contact</a></l1>
                    </u1>
                    {/* <Link to="#contacts" smooth>
                      Contact
                    </Link> */}
                </nav>
            </header>
        </body>
    )
}

export default Header;