import React from 'react';
import bg from './../../assets/img/bg.jpeg'
import profilePicture from './../../assets/img/avatar_profile.png'
import specialLink from './../../assets/img/special_link.svg'
import defaultLink from './../../assets/img/link.svg'
import Image from '../UI/Image/Image';

const Profile = ({profile}) => {
    return (
        <div className="profile flex rounded-md justify-between items-center pt-14 pr-5 pb-2 pl-3 mb-4" style={{backgroundImage: `url(${bg})`}}>
            <div className="profile__data flex items-center">
                <Image className="w-10 h-10 mr-3" src={profilePicture} alt="" />
                <div className="flex flex-col items-start">
                    <h4 className="text-white text-base font-bold leading-none">{profile.name}</h4>
                    <p className="text-white text-sm text-opacity-60">{profile.profile}</p>
                </div>
            </div>
            {profile.default ? <Image src={defaultLink} /> : <Image src={specialLink} />}
        </div>
    );
};

export default Profile;