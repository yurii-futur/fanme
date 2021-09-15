import React from 'react';
import Feed from '../Feed/Feed';
import Aside from '../Aside/Aside';

const Content = ({posts, profiles, setVisible}) => {
    return (
        <div className='content max-w-xl pt-8  w-full mx-auto flex justify-center lg:justify-between items-start'>
            <Feed setVisible={setVisible} posts={posts}/>
            <Aside profiles={profiles}/>
        </div>
    );
};

export default Content;