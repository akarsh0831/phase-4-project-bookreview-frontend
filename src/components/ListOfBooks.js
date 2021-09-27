import React from 'react'
import { Link } from 'react-router-dom';


const ListOfBooks = ({books, deleteBook, addBookOwnership}) => (
    <header>{books.map((book, index) => (
        <div key={index}>
            <a href={`https://www.google.com/search?q=${book.title}`}><h2>{book.title}</h2></a>
            <Link to={`/editBook/${book.id}`}>Edit</Link>
            <button value={book.id} onClick={deleteBook}>Delete</button>
            <button value={book} onClick={addBookOwnership}>Add BookOwnership</button>
        </div> 
))}</header>
);

export default ListOfBooks;