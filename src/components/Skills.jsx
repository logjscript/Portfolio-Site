import postgres from '../assets/postgres.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import javaScript from '../assets/javascript.png'
import reactLogo from '../assets/react.png'
import github from '../assets/github.png'
import Icon from './Icon'

const Skills = () => {
    const images = [
        {path: javaScript, name: 'JavaScript'}, 
        {path: reactLogo, name: 'React'}, 
        {path: tailwind, name: 'Tailwind'}, 
        {path: github, name: 'Github'},
        {path: node, name: 'Node.js'}, 
        {path: postgres, name: 'PostgreSQL'}, 
    ];
    return (
        <div name='skills' className='sm:text-xl w-full h-screen bg-gray-50 text-[#4f5f8d] px-4 sm:px-16'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='w-full text-center'>
                    <h2 className='text-4xl sm:text-6xl text-[#2b3c6d] font-bold inline border-b-4 border-[#d81b60] '>Skills</h2>
                    <p className='pt-6'>These are the technologies I am proficient with</p>
                </div>

                <div className='w-full grid justify-center grid-cols-[repeat(2,minmax(60px,110px))] sm:grid-cols-[repeat(auto-fit,140px)] gap-4 text-center pt-6 px-8 sm:px-0'>
                    {images.map(image => {
                        return <Icon path={image.path} name={image.name} key={image.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;