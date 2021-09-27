import React, {Component} from 'react'
import BookForm from '../containers/BookForm';
import Book from './Book';

class CreateBook extends Component {

    state = {
        bookFormFlag: false,
        title: '',
        author: '',
        review: '',
    }

    addBook = (book) => {
        fetch(`/books`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                ...this.state,
                title: '',
                author: '',
                review: '',
            })
        })
        this.setState({...this.state, bookFormFlag: false})
    }


    /*editBook = (id) => {
        fetch(`http://localhost:9292/genres/${this.state.genreId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
    } */

    /* deleteBook = (bookId) => {
        fetch(`/books/${bookId}`, {
            method: "DELETE",
            headers: {
            'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(this.updateDeadState(bookId))
        .catch(error => console.log(error))
    } */

    handleSubmit = (e) => {
        const book = {
            title: this.state.title,
            author: this.state.author,
            review: this.state.review
        }
        e.preventDefault()
        this.addBook(book)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleBookFormFlag = () => {
        this.setState({...this.state, bookFormFlag: !this.state.bookFormFlag})
    }

    
    render() {
        if (this.state.bookFormFlag){
            return (
            <div>
                <h1>Books:</h1>
                <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <br/>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                <br/>
                <br/>
                <label>Author</label>
                <br/>
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                <br/>
                <label>Review</label>
                <br/>
                <input type="text" name="review" value={this.state.review} onChange={this.handleChange}/>
                <br/>
                <input type="submit" />

                </form>
        </div>
    )}

    else {
        return (
            <div>
                <button onClick={this.toggleBookFormFlag}>New Book</button>
            </div>
        )
    }
}

 }
export default CreateBook;

