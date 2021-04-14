import React, { useState, createRef } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./styles.css";
import { CSSTransition } from "react-transition-group";

const   Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <NavLink to="/home">The Brand</NavLink>
            </div>
            <div className="navbar-right">
                <div className="navbar-nav">
                    <ul>
                        <li>
                            <NavLink to="/shop" activeStyle={{borderBottom: "2px groove black"}}>Boutique</NavLink>
                        </li>
                        <li>
                            <NavLink to="/avis" activeStyle={{borderBottom: "2px groove black"}}>Vos avis</NavLink>
                        </li>
                        <li>
                            <NavLink to="/FAQ" activeStyle={{borderBottom: "2px groove black"}}>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeStyle={{borderBottom: "2px groove black"}}>Contactez-nous</NavLink>
                        </li>
                    </ul>
                </div>
                <div >
                    <Button variant="light" onClick={props.handleToggleButton} className="toggle-button">
                        { props.showDropdown ?
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                            :
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        }
                    </Button>
                </div>
                <div className="card-button">
                    <NavLink to="/card">
                        <FontAwesomeIcon icon={faShoppingBag} size="2x" />
                    </NavLink>
                </div>
                <div className="user-button">
                    <NavLink to="/login">
                        <FontAwesomeIcon icon={faUser} size="2x" />
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
};

const   DropdownNav = (props) => {
    const   nodeRef = createRef();

    return (
        <CSSTransition
            in={props.show}
            timeout={250}
            unmountOnExit
            classNames="dropdown"
            nodeRef={nodeRef}
        >
            <div className="dropdown-nav" ref={nodeRef}>
                <ul >
                    <li>
                        <NavLink to="/shop" activeStyle={{backgroundColor: "rgb(182, 182, 182)"}}>Boutique</NavLink>
                    </li>
                    <li>
                        <NavLink to="/avis" activeStyle={{backgroundColor: "rgb(182, 182, 182)"}}>Vos avis</NavLink>
                    </li>
                    <li>
                        <NavLink to="/FAQ" activeStyle={{backgroundColor: "rgb(182, 182, 182)"}}>FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeStyle={{backgroundColor: "rgb(182, 182, 182)"}}>Contactez-nous</NavLink>
                    </li>
                </ul>
            </div>
        </CSSTransition>
    );
};

const   Header = () => {
    const   [showDropdown, setShowDropdown] = useState(false);

    const   handleToggleButton = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="header">
            <Navbar handleToggleButton={handleToggleButton} showDropdown={showDropdown}/>
            <DropdownNav show={showDropdown} />
        </div>
    );
};

export default Header;