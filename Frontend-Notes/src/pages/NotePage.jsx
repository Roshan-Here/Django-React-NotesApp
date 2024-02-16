import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function NotePage() {
    const {id} = useParams()
    const [note, setNote] = useState([])

    useEffect(()=>{
        getNote()
    },[id])

    const getNote= async ()=>{
        const resp = await fetch(`http://192.168.1.7:8000/api/${id}`)
        const data = await resp.json()
        console.log(data)
        setNote(data)
    }


  return (
    <div>
        <h1>Single Notes {id}</h1>
        <p className='font-semibold text-gray-600'>{note?.body}</p>
    </div>
  )
}

export default NotePage