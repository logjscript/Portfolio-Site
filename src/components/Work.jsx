import Project from './Project'
import ProjectImg1 from '../assets/project1.png'

const Projects = () => {

  return (
    <div name='work' className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-16 bg-gray-50 text-[#4f5f8d]">
        <div className="sm:text-xl max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8 w-full text-center">
                <h2 className="text-4xl sm:text-6xl font-bold text-[#2b3c6d] inline border-b-4 border-[#d81b60]">Work</h2>
                <p className="max-w-[500px] pt-6 mx-auto">This is my most recent work which utilizes React, Tailwind CSS, Node.js, and PostgreSQL</p>
            </div>

            <div className="grid grid-cols-[minmax(200px,500px)] justify-center rounded-2xl">
                <Project projectImg={ProjectImg1} />
            </div>
        </div>
    </div>
  )
}

export default Projects;