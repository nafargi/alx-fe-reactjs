import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Header() {
    return (
        <header style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center"
        }}>
            <nav className="nav-bar">
                <div className="nav-bar-container">
                    <Link to="/" className="logo-container">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="nav-logo"
                            alt="Logo"
                        />
                    </Link>
                   
                    <div
                        className="link-container"
                        id="mobile"
                    >
                        <ul className="link-list">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        ` ${isActive ? "tomato-link" : "gray-link" }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        ` ${isActive ? "tomato-link" : "gray-link" }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/services"
                                className={({isActive}) =>
                                    ` ${isActive ? "tomato-link" : "gray-link" }`
                                }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                className={({isActive}) =>
                                    ` ${isActive ? "tomato-link" : "gray-link" }`
                                }
                                >
                                    Contact
                                </NavLink>
                            </li>
                           
                           
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

