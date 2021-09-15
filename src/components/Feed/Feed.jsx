import React from 'react';
import Post from '../Post/Post';
import Button from '../UI/Button/Button';
import Image from '../UI/Image/Image';
import plus from './../../assets/img/plus.svg'

const Feed = ({posts, setVisible}) => {
    return (
        <div className="feed w-full md:max-w-lg">
            <Button onClick={() => setVisible(true)} className='max-w-full w-full border border-gray-200 rounded h-14 mb-9 flex justify-center items-center'>
                <Image className="mr-1" src={plus}/>
                <p className="font-bold text-lg">New post</p>
            </Button>    
            {[...posts].reverse().map( (post, index) => {
                return <Post key={post.id + index} post={post}/>
            })}
        </div>
    );
};

export default Feed;