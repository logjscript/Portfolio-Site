import { useState } from 'react'
import Project from './Project'
import ProjectImg1 from '../assets/project1.png'
import ProjectImg2 from '../assets/project2.png'

const Projects = () => {

  return (
    <div name='work' className="w-full min-h-screen flex flex-col justify-center px-16 bg-gray-50 text-[#4f5f8d]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h2 className="text-6xl font-bold text-[#2b3c6d] inline border-b-4 border-[#d81b60]">Work</h2>
                <p className="pt-6 text-xl">This is some of my recent work</p>
            </div>

            <div className="grid grid-cols-[minmax(200px,300px)] sm:grid-cols-[repeat(auto-fit,300px)] justify-center sm:justify-start gap-4 rounded-2xl">
                <Project projectImg={ProjectImg2} />
                <Project projectImg={ProjectImg1} />
            </div>
        </div>
    </div>
  )
}

export default Projects;