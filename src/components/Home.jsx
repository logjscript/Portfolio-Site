import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-gray-50'>
            <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-center h-full'>
                <p className='text-[#d81b60] text-lg'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#2b3c6d]'>Logan Dietel</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#4f5f8d]'>I'm a Software Developer.</h2>
                <p className='text-[#808bab] text-lg sm:text-xl py-4 max-w-[700px]'>I am a self-taught developer looking for my first role in the industry. I began coding in April of 2022 and have focused on building quick and scalable apps. </p>
                
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className='text-white bg-[#2b3c6d] group px-6 py-3 my-2 flex items-center rounded-md hover:bg-[#d81b60]'>View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;