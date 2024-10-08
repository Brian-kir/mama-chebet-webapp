import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 rounded-lg '>
           <form>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
            <span className=' text-slate-500'>Mama</span>
            <span className=' text-slate-700'>Chebet</span>            
        </h1>
        </form> 
        <ul className='flex gap-4 '>
            <Link to='/home' >
              <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/eulogy'>
              <li className='hidden sm:inline text-slate-700 hover:underline'>Eulogy</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
