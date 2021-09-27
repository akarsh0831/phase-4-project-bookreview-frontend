import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ListOfBookOwnerships from './ListOfBookOwnerships';

class AllBookOwnerships extends Component {

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

    deleteBook = (deleter) => {
        
        fetch(`/book_ownerships/${deleter.target.value}`, {
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
                <h1>Search for a book by name</h1>
                <br/>
                <SearchBar onChange={this.handleSearchChange}/>
                <br/>
                <ListOfBookOwnerships books={desiredBook} theseBooks={this.state.theseBooks} deleteBook={this.deleteBook}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('/book_ownerships')
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

export default AllBookOwnerships