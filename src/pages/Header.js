import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../css/style.css';
import doge_transperant from '../images/doge_transperant.png';


function Header() {
    let initialDarkModeCheck = localStorage.getItem('theme');
    if (initialDarkModeCheck === 'dark') {
        const head = document.getElementsByTagName('head')[0]
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.id = 'dark-mode'
        link.href = 'css/dark.css'
        head.appendChild(link)
    }
    return (
        <>
            <div className="header_container">
                <div className="container">
                    <div className="row no-gutters grid">
                        <div className="col-md-5">
                            <div className="icon_img_text_container ">
                                <Link to="/" className="head_img_txt_link">
                                    <span className="head_img">
                                        <img src={doge_transperant} height="30px" width="30px" alt="doge"/>
                                    </span>
                                    umang
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="menu-item">

                                {/* <NavLink to="/blog" className="head_menu_link" activeStyle={{ background: "rgba(254, 220, 71, 1)", color: "#1b1d25" }}>Blog</NavLink> */}
                                <NavLink to="/about" className="head_menu_link" activeStyle={{ background: "rgba(254, 220, 71, 1)", color: "#1b1d25" }}>About Me</NavLink>
                              
                                <button
                                    id="dark_mode_button"
                                    onClick={(event) => {
                                        const theme =
                                            typeof window !== 'undefined' && localStorage.getItem('theme')

                                        if (theme === 'dark') {
                                            typeof window !== 'undefined' &&
                                                localStorage.removeItem('theme')
                                            const link = document.querySelectorAll('#dark-mode')

                                            if (link) {
                                                link.forEach((el) => el.remove())
                                                event.target.textContent = '🌙'
                                            }
                                        } else {
                                            typeof window !== 'undefined' &&
                                                localStorage.setItem('theme', 'dark')
                                            event.target.textContent = '☀️'
                                            const head = document.getElementsByTagName('head')[0]
                                            const link = document.createElement('link')
                                            link.rel = 'stylesheet'
                                            link.id = 'dark-mode'
                                            link.href = 'css/dark.css'

                                            head.appendChild(link)
                                        }
                                    }}
                                >
                                    {typeof window !== 'undefined' &&
                                        localStorage.getItem('theme') === 'dark'
                                        ? '☀️'
                                        : '🌙'}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Header;
