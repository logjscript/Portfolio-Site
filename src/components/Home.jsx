import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full'>
                <p className='text-[#d81b60]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Logan Dietel</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a self-taught developer looking for my first role in the industry. I began coding 1.5 years ago and have focused on building quick and responsive apps with eye-appealing user-interface. </p>
                
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-[#d81b60] hover:border-[#d81b60]'>View Work 
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