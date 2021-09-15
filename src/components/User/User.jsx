import React from 'react';
import Image from '../UI/Image/Image'
import avatar from '../../assets/img/avatar_md.png'


const User = () => {
    return (
        <div className="aside__top flex justify-between items-center mb-10">
        <div className="aside__top-profile flex items-center ">
            <Image className="mr-3" src={avatar}/>
            <div className="flex flex-col items-start">
                <h3 className="text-base text-gray-800 font-bold">Alex Lundqvist</h3>
                <p className="text-sm text-gray-800 opacity-60">
                    alexlundqvist
                </p>
            </div>
        </div>
        <p className="text-magicBlue text-base font-bold">Log out</p>
    </div>
    );
};

export default User;