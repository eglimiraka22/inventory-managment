import React from 'react'
import HeaderList from '../UI/HeaderList'

const Header = () => {
  return (
    <React.Fragment>
        <header className='relative flex w-[100%] h justify-between h-[5rem] p-1 rounded-md '>
            <ul className='flex relative w-full gap-3 justify-between rounded-md mx-2 p-2 h-full'>
           <HeaderList text={`On Road`} className='bg-yellow-300'/>
           <HeaderList text={`Completed`} className='bg-green-500'/>
           <HeaderList text={`On Hold`} className='bg-red-500'/>

            
            </ul>
        </header>
    </React.Fragment>
  )
}

export default Header