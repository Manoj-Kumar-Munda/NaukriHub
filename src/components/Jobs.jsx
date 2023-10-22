import React from 'react'
import { jobsapi } from '../utils/constants'
import ListItem from './ListItem'


const Jobs = () => {
  return (
    <section className=''>
      <h1 className='text-3xl font-bold py-4 text-center'>Latest <span className='text-secondary'>Jobs</span></h1>

      <div className=''>
        <ul className='space-y-2'>
          {
            jobsapi.latestJobs.jobsList.map( (item, index) => <ListItem key={index} data={item} />)
          }
        </ul>
        
      </div>

    </section>
  )
}

export default Jobs