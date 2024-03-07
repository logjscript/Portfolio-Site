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
        <div name='skills' className='w-full h-screen bg-[#EEEDE2] text-[#4f5f8d] px-16'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <h2 className='text-6xl text-[#2b3c6d] font-bold inline border-b-4 border-[#d81b60]'>Skills</h2>
                    <p className='pt-6 text-xl '>These are the technologies I have worked with so far</p>
                </div>

                <div className='w-full grid justify-center sm:justify-start grid-cols-[repeat(2,minmax(100px,140px))] sm:grid-cols-[repeat(auto-fit,140px)] gap-4 text-center pt-6'>
                    {images.map(image => {
                        return <Icon path={image.path} name={image.name} key={image.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;