import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 py-2'>
        <div className=''>
            <h1 className='text-3xl font-black'>Naukri<span className='text-base font-black text-[#0188A6]'>hub</span></h1>
        </div>
        <nav className='hidden md:block'>
            <ul className='flex gap-x-4 items-center font-Roboto'>
                <li><span className= "text-sm font-bold " >Home</span></li>
                <li><span className= "text-sm font-bold " >Govt. Jobs</span></li>
                <li><span className= "text-sm font-bold " >Admit Cards</span></li>
                <li><span className= "text-sm font-bold " >Results</span></li> 
                <li><span className= "text-sm font-bold " >About Us</span></li>
            </ul>

        </nav>

        <div className=''>
            <button className='bg-[#0188A6] text-white text-sm px-4 py-2 rounded-md font-Roboto'>Subscribe</button>
        </div>

    </header>
  )
}

export default Header