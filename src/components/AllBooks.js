import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ListOfBooks from './ListOfBooks';
import CreateBook from './CreateBook';

class AllBooks extends Component {

    constructor() {
        super()
        this.state = {
            theseBooks: [],
            searchTerm: '',
            renderTrigger: ''
        }
    }

    handleSearchChange = (event) => {
        this.setState({searchTerm: event.target.value})
        // console.log(`${this.state.searchTerm}`);
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
                books: [...this.state.books, data],
                title: ''
            })
        })
        this.setState({...this.state, bookFormFlag: false})
    }

    addBookOwnerships = (book) => {
        const book_ownership = {
            book_id: book.id,
            title: book.title,
            author: book.author,
            review: book.review,
        }
        fetch(`/book_ownerships`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book_ownership)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    updateDeadState = (bookTag) => {
        this.setState({...this.state, books: this.state.books.filter(b => b.id !== bookTag)})
    }

    deleteBook = (deleter) => {
        
        fetch(`/books/${deleter.target.value}`, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json'
         }
        })
        // .then(console.log(this.state))
        .then(this.updateSearch(deleter.target.value))
        .catch(error => console.log(error))
    }

    deleteBookOwnerships = (deleter) => {
        
        fetch(`/books/${deleter.target.value}`, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json'
         }
        })
        // .then(console.log(this.state))
        .then(this.updateSearch(deleter.target.value))
        .catch(error => console.log(error))
    }

    updateSearch = (deleteId) => {
        console.log(deleteId)
        let updatedBooks = this.state.theseBooks.filter(book => `${book.id}` !== deleteId)
        this.setState({...this.state, theseBooks: updatedBooks})
        console.log(this.state.theseBooks)
    }

    render() {

        const desiredBook = this.state.theseBooks.filter(p =>
            p.title.includes(this.state.searchTerm) 
        )

        return (
            <div>
                <h1>Search for a book by title</h1>
                <br/>
                <SearchBar onChange={this.handleSearchChange}/>
                <br/>
                <ListOfBooks books={desiredBook} theseBooks={this.state.theseBooks} deleteBook={this.deleteBook} addBookOwnerships={this.addBookOwnerships}/>
                <CreateBook />
            </div>
        )
    }

    componentDidMount() {
        fetch('/books')
          .then(resp => resp.json())
          .catch(eventZ => console.error(eventZ))
          .then((bookBase) => {
              console.log(bookBase)
              this.setState({
                  theseBooks: bookBase
              })
              console.log(this.state.theseBooks)
            })
          
    }

}

export default AllBooks