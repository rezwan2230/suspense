"use client"
const error = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-5'>
            <div className=' bg-red-400 h-[200px] w-full flex justify-center items-center'>
                <h1 className='text-2xl text-black font-semibold'>Error</h1>
            </div>
        </div>
    );
};

export default error;