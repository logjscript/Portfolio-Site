import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gray-50 px-16 sm:text-xl'>
            <div className='max-w-[600px] flex flex-col justify-center items-center gap-6 w-full h-full mx-auto'>
                <div className='w-full text-center'>
                    <h2 className='text-4xl sm:text-6xl text-[#2b3c6d] font-bold inline border-b-4 border-[#d81b60]'>About</h2> 
                </div>
                <div className='w-full flex flex-col gap-4 justify-center items-center text-[#4f5f8d]'>
                    <div className='sm:text-right text-xl sm:text-4xl font-bold'>
                        <p className='text-center'>Hi, I'm Logan. It's nice to meet you.</p>
                    </div>
                    <div>
                        <p className='text-justify'>As a frontend developer with a background in business and law, I bring a unique combination of technical skills and a keen eye for detail. I have a passion for creating visually appealing user interfaces that promote the user experience. With exceptional team-working skills and the ability to convey ideas effectively, I thrive in collaborative environments. I am constantly looking to expand my knowledge of the frontend. My analytical mindset allows me to tackle complex challenges and find innovative solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;