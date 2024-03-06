import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import javaScript from '../assets/javascript.png'
import reactLogo from '../assets/react.png'
import github from '../assets/github.png'
import Icon from './Icon'

const Skills = () => {
    const images = [
        {path: html, name: 'HTML'}, 
        {path: css, name: 'CSS'}, 
        {path: tailwind, name: 'Tailwind'}, 
        {path: javaScript, name: 'JavaScript'}, 
        {path: reactLogo, name: 'React'}, 
        {path: github, name: 'Github'},
    ];
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 px-8'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#d81b60]'>Skills</p>
                    <p className='py-4'>These are the technologies I have worked with so far:</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    {images.map(image => {
                        return <Icon path={image.path} name={image.name} key={image.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;