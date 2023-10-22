import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 2xl:px-[5%] py-2'>
        <div className=''>
            <h1 className='text-3xl font-black'>Naukri<span className='text-base font-black text-[#0188A6]'>hub</span></h1>
        </div>
        <nav className='hidden md:block'>
            <ul className='flex gap-x-4 items-center font-SourceSans text-primary-black'>
                <li><span className= "text-sm font-bold cursor-pointer transition-colors hover:text-secondary  " >Home</span></li>
                <li><span className= "text-sm font-bold cursor-pointer transition-colors hover:text-secondary  " >Govt. Jobs</span></li>
                <li><span className= "text-sm font-bold cursor-pointer transition-colors hover:text-secondary  " >Admit Cards</span></li>
                <li><span className= "text-sm font-bold cursor-pointer transition-colors hover:text-secondary  " >Results</span></li> 
                <li><span className= "text-sm font-bold cursor-pointer transition-colors hover:text-secondary  " >About Us</span></li>
            </ul>

        </nav>

        <div className='self-center'>
            <button className='bg-secondary text-white text-sm px-4 py-2 rounded-md font-SourceSans font-semibold'>Subscribe</button>
        </div>

    </header>
  )
}

export default Header