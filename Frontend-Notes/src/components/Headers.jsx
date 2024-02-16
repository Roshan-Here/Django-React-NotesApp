import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
	<div className=''>
    <div className='w-full mx-auto  mt-12 flex flex-col gap-6 bg-slate-950 overflow-hidden'>
      	<div
		className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-slate-950 shadow-md border-slate-100  transition duration-700 ease-out"
	>
		<div className="flex justify-between p-4">
			<div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-yy">
				<Link to={'/'}>
				Notes
				</Link>
			</div>
			<div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
				<button
					className="px-6 py-2 text-black transition duration-700 ease-out bg-white border-yy rounded-lg hover:bg-black hover:border hover:text-yy"
					>Total Count</button
				>
			</div>
		</div>
	</div>
    </div>
	<div className='w-screen h-max mx-0  bg-slate-800 mt-1'>
		<div className='flex justify-center items-center p-10'>
			<p className="text-3xl font-bold text-yy underline">
        		  Hello Django + React + tailwind css
      		</p> 
		</div>
	</div>
	</div>
  )
}

export default Headers