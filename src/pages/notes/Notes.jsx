import React, { useEffect, useState } from 'react'
import NoteItem from '../../components/NoteItem';
import './notes.css'
import { GrSearch } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegSquarePlus } from "react-icons/fa6";


function Notes({notes}) {

    const [showSearch, setShowSearch] = useState(false)
    const [text, setText] = useState('')
    const [filterNotes, setFilterNotes] = useState(notes)

    const handleSearch = () =>{
        setFilterNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                return note;
            }
        }))
    }

    useEffect(handleSearch, [text])

    return (
        <section className='section-header'>
            <header className="notes-header">
                {!showSearch && <h1>My Notes</h1>}
                {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch()}} autoFocus placeholder='Keyword.....' />}
                <button className='btn' onClick={()=> setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose /> :<GrSearch />}</button>
            </header>
            <div className="notes-container">
                {filterNotes.length === 0 && <p className='empty-notes'>No notes found</p>}
                {
                    filterNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-notes' className='btn add-btn'><FaRegSquarePlus /></Link>
        </section>
    )
}

export default Notes
