import React from 'react';
import Post from '../Post/Post';

const Feed = ({posts, setVisible}) => {
    return (
        <div className="feed w-full md:max-w-lg">
            <button onClick={() => setVisible(true)}className='max-w-full w-full border border-gray-200 rounded h-14 mb-9'>New post</button>
            
            {posts.map( post => {
                return <Post key={post.id} post={post}/>
            })}
        </div>
    );
};

export default Feed;