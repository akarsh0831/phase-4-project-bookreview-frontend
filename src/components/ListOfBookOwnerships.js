import React from 'react'
import { Link } from 'react-router-dom';


const ListOfBookOwnerships = ({books, deleteBookOwnerships}) => (
    <header>{books.map((book, index) => (
        <div key={index}>
            <a href={`https://www.google.com/search?q=${book.title}`}><h2>{book.title}</h2></a>
            <Link to={`/editBook/${book.book_id}`}>Edit</Link>
            <button value={book.id} onClick={deleteBookOwnerships}>Delete</button>
        </div> 
))}</header>
);

export default ListOfBookOwnerships;