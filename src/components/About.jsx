import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#d81b60]'>About</p>
                    </div>

                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello, I'm Logan, nice to meet you. Feel free to take a look around.</p>
                    </div>
                    <div>
                        <p className='sm:pt-2'>I discovered coding a year and a half ago. Problem solving, interacting with technology, and constant learning have intrigued and helped me to pursue my goal of becoming a Front-End Developer. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;