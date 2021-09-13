import React from 'react';
import Feed from '../Feed/Feed';
import Aside from '../Aside/Aside';

const Content = ({posts, setVisible}) => {
    return (
        <div className='content max-w-xl pt-8  w-full mx-auto flex justify-between items-start'>
            <Feed setVisible={setVisible} posts={posts}/>
            <Aside />
        </div>
    );
};

export default Content;