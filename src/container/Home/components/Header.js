import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header-area">
                <div className="logo">
                    Shoptime
                </div>
                <ul className="navbar-ul">
                    <li className="navbar-li">HOME</li>
                    <li className="navbar-li-not-click">ORDERS</li>
                    <li className="navbar-li-not-click">PRODUCT</li>
                </ul>
                <div className="admin">
                    ADMIN
                </div>
            </header >
        )
    }
}

export default Header;