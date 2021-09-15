import React from 'react';
import avatar from '../../assets/img/small_avatar.svg';
import more from '../../assets/img/more.svg'
import content from '../../assets/img/content.png'
import bookmark from '../../assets/img/bookmark.svg'
import comment from '../../assets/img/comment.svg'
import like from '../../assets/img/like.svg'
import Locked from '../Locked/Locked';
import Image from '../UI/Image/Image';

const Post = ({post}) => {

    return (
        <div className="post border border-gray-200 py-4 rounded mb-9">
            <div className="post__top flex justify-between items-center px-4 mb-2">
                <div className="post__top-user flex items-center">
                    <Image className="mr-3" src={avatar} alt="" />
                    <div className="flex flex-col items-start">
                        <h3 className="leading-none font-bold text-base">{post.name}</h3>
                        <p className="text-sm text-gray-400">{post.profile}</p>
                    </div>
                </div>
                <Image className="post__top-more" src={more} alt="" />
            </div>
            <p className="text-left px-4 mb-4 text-base text-gray-800">{post.description}</p>
            <div className="post__content mb-5">
                {post.locked ? <Locked /> : <Image src={content} alt="" />}
            </div>
            <div className="post__control px-4 flex content-center justify-between">
                <div className="post__control-buttons flex items-center">
                    <Image src={like} className='mr-3' alt="" /><Image className='mr-3' src={comment} alt="" /><Image className='mr-3' src={bookmark} alt="" />
                </div>
                <div className="post__control-share px-9 py-2 border border-gray-200 rounded transform translate-y-1/4 text-lg text-gray-800">
                    Share
                </div>
            </div>
            <p className="post__control-date text-left px-4 text-base text-gray-900 opacity-50">
                {post.time}
            </p>
        </div>
    );
};

export default Post;