import { useState } from 'react';

const Project = ({ projectImg }) => {
    const [showDiv, setShowDiv] = useState(false);
    const classes = `${showDiv ? 'absolute top-0 left-0' : 'hidden'} flex flex-col justify-evenly h-full w-full rounded-2xl p-4 text-center opacity-100 bg-gradient-to-r from-[#858e96] to-[#2b3c6d]`
    
    const handleMouse = () => {
        setShowDiv(!showDiv);
    }

    return (
        <div 
            onMouseEnter={handleMouse} 
            onMouseLeave={handleMouse} 
            className="relative container rounded-2xl flex justify-center items-center mx-auto shadow-lg shadow-[#CDCAA7]"
        >
            <img 
                src={projectImg} 
                alt='Image of a Project'
                className='w-full h-full aspect-[20/17] object-cover rounded-2xl' 
            />

            <div className={classes}>
                <div className='text-2xl font-bold text-white tracking-wider'>
                    JS Desktop Application
                </div>

                <div className='pt-8 text-center'>
                    <a href='/'> {/* add link to demo here */}
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEDE2] text-[#2b3c6d] font-bold text-lg'>
                            Demo
                        </button>
                    </a>

                    <a href='/'> {/* add link to code here */}
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEDE2] text-[#2b3c6d] font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;