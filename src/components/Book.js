import React, { Component} from 'react';

class Book extends Component{

    state = {
        bookReview: '',
        bookId: null,
        bookFormFlag: false,
        title: ''
    }

    fetchData = () => {
        fetch(`/books/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(info => {
            console.log(info)
            this.setState({
                ...this.state,
                bookId: info.id,
                title: info.title,
                bookReview: info.review
            })
        })
    }


    editBook = (id) => {
        fetch(`/books/${this.state.bookId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
    } 

    deleteBook = (bookId) => {
        fetch(`/books/${bookId}`, {
            method: "DELETE",
            headers: {
            'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(this.updateDeadState(bookId))
        .catch(error => console.log(error))
    }

    updateDeadState = (bookTag) => {
        this.setState({...this.state, books: this.state.books.filter(b => b.id !== bookTag)})
    }

    componentDidMount() {
        this.fetchData();
    }
    
    render() {
    return (
        <div>
            <h1>Books:</h1>
            {this.state.books.map(bo => <Book key={bo.id} book={bo} editThisBook={this.editBook} deleteThisBook={this.deleteBook}/>).sort()}
        </div>
    )}
    
}

    /* render() {
    return (
        <div>
            <a href={`https://www.google.com/search?q=${this.props.book.name}`}><h2>{this.props.book.name}</h2></a>
            <button onClick={() => {this.props.deleteThisBook(this.props.book.id)}}>Delete</button>
        </div>
    )}
} */

export default Book;