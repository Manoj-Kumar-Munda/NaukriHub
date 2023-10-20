import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 py-2'>
        <div className='text-[#0188A6]'>
            <h1 className='text-3xl font-black'>Naukri<span className='text-base font-black'>hub</span></h1>
        </div>
        <nav className='hidden md:block'>
            <ul className='flex gap-x-4 items-center'>
                <li><span className= "font-semibold" >Home</span></li>
                <li><span className= "font-semibold" >Govt. Jobs</span></li>
                <li><span className= "font-semibold" >Exam Preparation</span></li>
                <li><span className= "font-semibold" >Admit Cards</span></li>
                <li><span className= "font-semibold" >Results</span></li> 
                <li><span className= "font-semibold" >About Us</span></li>
            </ul>

        </nav>

        <div className=''>
            <button className='bg-[#0188A6] text-white text-sm px-4 py-2 rounded-md'>Subscribe</button>
        </div>

    </header>
  )
}

export default Header