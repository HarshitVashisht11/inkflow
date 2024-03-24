import React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'


const Navigation = () => {
  return (
    <div className='p-4 flex items-center justify-between relative'>
        <aside className='flex items-center gap-2'>
        <span className='text-xl font-bold'>Ink Flow</span>
        </aside>
        <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <ul className="flex items-center justify-center gap-8">
                <Link href={'#'}>Pricing</Link>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Features</Link>
            </ul>
        </nav>
        <aside className='flex gap-2 items-center'>
            <Link href={'/'} className=' bg-emerald-300 text-white p-2 px-4 rounded-md hover:bg-emerald-300/80'>Login</Link>
            <Link href={'/'} className=' bg-white text-black p-2 px-4 rounded-md hover:bg-white/80'>Sign Up</Link>
        </aside>
    </div>
  )
}

export default Navigation