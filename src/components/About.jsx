import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#EEEDE2] text-gray-300 px-16 mx-auto'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full text-left sm:grid sm:grid-cols-2 sm:gap-8 sm:text-right'>
                    <div className='pb-8'>
                        <h2 className='text-6xl text-[#2b3c6d] font-bold inline border-b-4 border-[#d81b60]'>About</h2>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 text-[#4f5f8d]'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Logan. It's nice to meet you. Feel free to look around.</p>
                    </div>
                    <div>
                        <p className='text-xl'>I discovered coding a year and a half ago. Problem solving, interacting with technology, and constant learning have intrigued and helped me to pursue my goal of becoming a Front-End Developer. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;