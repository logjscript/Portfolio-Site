import { useState } from 'react';

const Project = ({ projectImg }) => {
    const [showDiv, setShowDiv] = useState(false);
    const classes = `${showDiv ? 'absolute top-0 left-0' : 'hidden'} flex flex-col justify-evenly h-full w-full rounded-2xl p-2 text-center opacity-100 bg-gradient-to-r from-[#858e96] to-[#2b3c6d]`
    
    const handleMouse = () => {
        setShowDiv(!showDiv);
    }

    return (
        <div 
            onMouseEnter={handleMouse} 
            onMouseLeave={handleMouse} 
            className="relative container rounded-2xl flex justify-center items-center mx-auto shadow-lg shadow-gray-400"
        >
            <img 
                src={projectImg} 
                alt='Image of a Project'
                className='w-full h-full aspect-[10/7] object-cover rounded-2xl' 
            />

            <div className={classes}>
                <div className='text-2xl sm:text-4xl font-bold text-white tracking-wider'>
                    Pacific Clothing
                </div>

                <div className='pt-4 text-center'>
                    <a href='https://pacific-clothing.onrender.com'
                        target='_blank'
                    >
                        <button className='text-center rounded-lg px-4 py-3 m-1 bg-gray-50 text-[#2b3c6d] font-bold text-lg'>
                            Demo
                        </button>
                    </a>

                    <a href='https://github.com/logjscript/Pacific-Clothing'
                        target='_blank'
                    > 
                        <button className='text-center rounded-lg px-4 py-3 m-1 bg-gray-50 text-[#2b3c6d] font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;