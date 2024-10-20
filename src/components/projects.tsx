'use client'
import React from 'react'
import projectData from '~/data/projects'
import techData from '~/data/tech'
import { Tech } from '~/lib/interfaces'
import ProjectItem from './project-item'

function Projects() {
  const technicalList = (technologies: number[]): Tech[] => {
    const result: Tech[] = []
    for (let i = 0; i < technologies.length; i++) {
      for (let j = 0; j < techData.length; j++) {
        if (technologies[i] === techData[j].id) {
          result.push(techData[j])
        }
      }
    }
    return result
  }

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
      {projectData.map((item, index) => {
        return (
          <ProjectItem
            key={index}
            item={item}
            index={index}
            technicalList={technicalList}
          />
        )
      })}
    </div>
  )
}

export default Projects
