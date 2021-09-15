import React from 'react';
import Image from '../UI/Image/Image';
import locked from './../../assets/img/locked.svg'
import right from './../../assets/img/right.svg'

const Locked = () => {
    return (
        <>
            <div className="locked bg-blue-50 p-4">
                <p className="locked__time text-right text-base text-gray-500">00:56</p>
                <div className="locked__info flex flex-col items-center mt-20 mb-28">
                    <Image className="w-20 mb-6" src={locked} />
                    <h2 className="text-xl text-gray-800 font-bold mb-2">This video is locked</h2>
                    <p className="text-lg text-gray-500">Unlock the post to see it</p>
                </div>
            </div>
            <div className="locked__plate px-3 py-3 bg-magicBlue flex justify-between items-center">
                <p className="text-white text-base">Unlock this post for 6€ </p>
                <Image src={right}/>
            </div>
        </>

    );
};

export default Locked;