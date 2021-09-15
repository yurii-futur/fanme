import React from 'react';
import Navbar from '../Navbar/Navbar';
import Image from '../UI/Image/Image';
import Input from '../UI/Input/Input';
import logo from './../../assets/img/logo.svg'

import home from './../../assets/img/home.svg'
import send from './../../assets/img/send.svg'
import bookmark from './../../assets/img/bookmark.svg'
import smallNavAvatar from './../../assets/img/small_nav_avatar.png'


const Header = () => {

    const navBarImagesURL = [
        {
            url: home
        },
        {
            url: send
        },
        {
            url: bookmark
        },
        {
            url: smallNavAvatar
        }
    ]

    return (
        <header className="header border-b border-gray-200">
            <div className="container min-h-0.45px flex content-center px-4 lg:px-0 justify-center md:justify-between max-w-xl mx-auto py-2 ">
                <Image src={logo} alt="" />
                <Input type="text" placeholder="Search" className="border hidden md:block bg-gray-50 border-gray-300 px-5 rounded-md text-base text-center " />
                <Navbar images = {navBarImagesURL}/>
            </div>

        </header>
    );
};

export default Header;