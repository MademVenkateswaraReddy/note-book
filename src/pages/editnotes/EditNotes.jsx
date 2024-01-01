import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import './editNotes.css'
import useCreateDate from '../../components/useCreateDate'

function EditNotes({notes, setNotes}) {
    const {id} = useParams();
    const note = notes.find((item)=> item.id === id)
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details)
    const date = useCreateDate();
    const navigate = useNavigate()

    const handleForm = (e) =>{
        e.preventDefault()

        if(title && details){
            const newNote = {...note, title, details, date}
            const newNotes = notes.map(item => {
                if(item.id === id){
                    item = newNote;
                }
                return item
            })
            setNotes(newNotes)
        }
        navigate('/')
    }

    const handleDelete = () =>{
        if(window.confirm('Are you sure you want to delete?')){
            const newNotes = notes.filter(item => item.id !== id)
            setNotes(newNotes)
            navigate('/')
        }
    }

    return (
        <section className='section-header'>
            <header className='create-note-header'>
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <button className='btn lg primary' onClick={handleForm}>Save</button>
                <button className='btn danger' onClick={handleDelete}><RiDeleteBin6Line /></button>
            </header>
            <form action="" className='create-note-form' onSubmit={handleForm}>
                <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} autoFocus />
                <textarea cols="30" rows="30" placeholder='Note Deetails....' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
}

export default EditNotes
