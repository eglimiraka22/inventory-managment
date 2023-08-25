import React from 'react'
import HeaderList from '../UI/HeaderList'

const Header = () => {
  return (
    <React.Fragment>
        <header className='relative flex w-[100%] h justify-between items-center h-[7.5rem] p- rounded-md   '>
            <ul className='flex relative w-full gap-3 justify-between rounded-md mx-3 px-1 py-2 h-full shadow-lg'>
           <HeaderList text={`On Road`} className='bg-[#ECDE7C]'/>
           <HeaderList text={`Completed`} className='bg-[#7AC14D]'/>
           <HeaderList text={`On Hold`} className='bg-[#FE4C4A]'/>

            
            </ul>
        </header>
    </React.Fragment>
  )
}

export default Header