import { delay } from '@/utils/delay';
import React from 'react';

const PostPage = async() => {
    await delay(2000)
    return (
       <div className='max-w-7xl mx-auto flex flex-col gap-5'>
            <div className=' bg-teal-500 h-[200px] w-full flex justify-center items-center'>
                <h1 className='text-2xl text-black font-semibold'>Dynamic Posts</h1>
            </div>
        </div>
    );
};

export default PostPage;