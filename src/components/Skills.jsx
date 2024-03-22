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
        <div name='skills' className='sm:text-xl w-full h-screen bg-gray-50 text-[#4f5f8d] px-4 sm:px-16'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='w-full text-center'>
                    <h2 className='text-4xl sm:text-6xl text-[#2b3c6d] font-bold inline border-b-4 border-[#d81b60] '>Skills</h2>
                    <p className='pt-6'>These are the technologies I am proficient with</p>
                </div>

                <div className='w-full grid justify-center grid-cols-[repeat(2,minmax(100px,140px))] sm:grid-cols-[repeat(auto-fit,140px)] gap-4 text-center pt-6'>
                    {images.map(image => {
                        return <Icon path={image.path} name={image.name} key={image.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;