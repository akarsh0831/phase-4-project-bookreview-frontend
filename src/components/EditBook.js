import React, {Component} from 'react'
import BookForm from '../containers/BookForm';
import Book from './Book';
import { useHistory } from 'react-router-dom';


class EditBook extends Component {


    state = {
        title: '',
        author: '',
        review: '',
        bookId: null,
    }

    componentDidMount() {
        console.log("PROPS")
        console.log(this.props)
        fetch(`/books/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(info => {
            console.log(info)
            this.setState({
                ...this.state,
                title: info.title,
                author: info.author,
                review: info.review,
                bookId: info.id
            })
        })
}

    editBook = (book) => {
        fetch(`/books/${this.state.bookId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
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
        this.editBook(book)
        this.props.history.push("/allBooks")
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    render() {
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

}
export default EditBook;