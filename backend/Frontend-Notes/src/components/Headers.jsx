import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Headers = ({notes}) => {
	const {id} = useParams()
	// console.log(notes)
	const nullNotes = () =>{
		if(notes.length===0){
		const bb = (<button></button>)
		return bb
		}
		else if(!id){
		const bb =	(<button
				className="px-6 py-2 text-black transition duration-700 ease-out bg-white border-yy rounded-lg hover:bg-black hover:border hover:text-yy">
				Total Count {notes.length} 
			</button>)
		return bb
		}
	}

  return (
	<div className='w-screen m-0'>
      	<div
		className="fixed inset-x-0 top-0 z-10 w-full gap-6 px-8 py-1 bg-slate-950 shadow-md border-slate-100  transition duration-700 ease-out"
	>
		<div className="flex flex-row justify-between p-4">
			<div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-yy">
				<Link to={'/'}>
				Notes
				</Link>
			</div>
			<div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
				{nullNotes()}
			</div>
		</div>
	</div>
	<div className='flex flex-col  bg-slate-950 mt-14'>
		<div className='flex flex-row px-14'>
			<p className="px-16 py-3 text-3xl font-bold text-yy underline">
        		  Hello Django + React + tailwind css
      		</p> 
		</div>
	</div>
	</div>
  )
}

export default Headers