import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#EEEDE2]'>
            <div className='max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full'>
                <p className='text-[#d81b60] text-lg'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#2b3c6d]'>Logan Dietel</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#4f5f8d]'>I'm a Front-End Developer.</h2>
                <p className='text-[#808bab] text-lg py-4 max-w-[700px]'>I am a self-taught developer looking for my first role in the industry. I began coding a year and a half ago and have focused on building quick and responsive apps with eye-appealing user-interface. </p>
                
                <div>
                    <button className='text-white bg-[#2b3c6d] group px-6 py-3 my-2 flex items-center rounded-md hover:bg-[#d81b60]'>View Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;