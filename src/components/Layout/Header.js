import React from 'react'
import HeaderList from '../UI/HeaderList'
import { useSelector } from 'react-redux';
const Header = () => {

    const jobsData = useSelector((state) => state.jobData.jobs);

    const filterJobsByStatus = (status) => {
        return jobsData.filter((job) => job.status === status);
      };

      const onRoadJobs = filterJobsByStatus('inProgress');
      const completedJobs = filterJobsByStatus('completed');
      const onHoldJobs = filterJobsByStatus('onHold');
  return (
    <React.Fragment>
        <header className='relative flex w-[100%] h-[4.5] justify-between items-center md:h-[7.5rem] p- rounded-md   '>
            <ul className='flex relative w-full gap-3 justify-between rounded-md mx-3 px-1 py-2 h-full shadow-lg'>
           <HeaderList text={`${onRoadJobs.length} On Road `} className='bg-[#ECDE7C]'/>
           <HeaderList text={`${completedJobs.length} Completed`} className='bg-[#7AC14D]'/>
           <HeaderList text={`${onHoldJobs.length} On Hold`} className='bg-[#FE4C4A]'/>

            
            </ul>
        </header>
    </React.Fragment>
  )
}

export default Header