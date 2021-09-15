import React from 'react';
import Image from '../UI/Image/Image';
import Link from '../UI/Link/Link';

const Navbar = ({images}) => {
    return (
        <nav className="navbar items-center hidden md:flex">
            {images.map( image => {
               return <Link className="link ml-7" href="#"><Image src={image.url}/></Link>
            })}
            
        </nav>
    );
};

export default Navbar;