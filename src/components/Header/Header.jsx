import React from 'react';
import logo from './../../assets/img/logo.svg'

const Header = () => {
    return (
        <header className="header border-b border-gray-200">
            <div className="container min-h-0.45px flex content-center justify-between max-w-xl mx-auto py-2 ">
                <img src={logo} alt="" />
                <input type="text" placeholder="Search" className="border border-gray-300 rounded-sm text-center "/>
                <nav>
                {/* <a href="#">

                </a> */}
                </nav>
                
            </div>
            
        </header>
    );
};

export default Header;