import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {v4 as uuid} from 'uuid'
import './createNotes.css'
import useCreateDate from '../../components/useCreateDate'

function CreateNotes({setNotes}) {
     const [title, setTitle] = useState('')
     const [details, setDetails] = useState('')
     const date = useCreateDate();
     const navigate = useNavigate()

     const handleSubmit = (e) =>{
        e.preventDefault()

        if(title && details){
            const note = {id: uuid(), title, details, date}
            setNotes(prevNotes => [note, ...prevNotes])
            navigate('/')
        }
     }


    return (
        <section className='section-header'>
            <header className='create-note-header'>
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <button className='btn lg primary' onClick={handleSubmit}>Save</button>
            </header>
            <form className='create-note-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Title' autoFocus value={title} onChange={(e)=> setTitle(e.target.value)} />
                <textarea cols="30" rows="30" placeholder='Note Deetails....' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
}

export default CreateNotes
