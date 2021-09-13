import React from 'react';
import avatar from '../../assets/img/small_avatar.svg';
import more from '../../assets/img/more.svg'
import content from '../../assets/img/content.png'
import bookmark from '../../assets/img/bookmark.svg'
import comment from '../../assets/img/comment.svg'
import like from '../../assets/img/like.svg'

const Post = ({post}) => {

    return (
        <div className="post border border-gray-200 py-4 rounded mb-9">
            <div className="post__top flex justify-between content-center px-4 mb-2">
                <div className="post__top-user flex content-center">
                    <img className="mr-1" src={avatar} alt="" />
                    <div>
                        <h3>{post.name}</h3>
                        <p>{post.profile}</p>
                    </div>
                </div>
                <img className="post__top-more" src={more} alt="" />
            </div>
            <p className="text-left px-4 mb-4">{post.description}</p>
            <div className="post__content mb-5">
                <img src={content} alt="" />
            </div>
            <div className="post__control px-4 flex content-center justify-between">
                <div className="post__control-buttons flex content-center">
                    <img src={like} className='mr-3' alt="" /><img className='mr-3' src={comment} alt="" /><img className='mr-3' src={bookmark} alt="" />
                </div>
                <div className="post__control-share px-9 py-2 border border-gray-200 rounded">
                    Share
                </div>
            </div>
            <p className="post__control-date text-left px-4">
                {post.time}
            </p>
        </div>
    );
};

export default Post;