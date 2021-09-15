import React from 'react';
import Profile from '../Profile/Profile';
import Image from '../UI/Image/Image'
import arrow from '../../assets/img/arrow.svg'
import User from '../User/User';

const Aside = ({profiles}) => {
    return (
        <div className="aside max-w-sm hidden flex-grow lg:flex flex-col">
            <User />
            <div className="aside__heading flex justify-between items-center mb-3">
                <h3 className="text-gray-400 text-lg font-bold">Suggestions</h3>
                <div className="aside__heading-arrows flex items-center ">
                    <Image src={arrow}/>
                    <Image className="transform rotate-180 ml-1" src={arrow}/>
                </div>
            </div>
            {profiles.map( profile => {
                return  <Profile profile={profile}/>
            })}
             <p className="text-magicBlue text-base text-center font-bold">View all</p>
           

        </div>
    );
};

export default Aside;