import React, { Component } from 'react';

class BookForm extends Component {

    state = {
        name: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewBook(this.state)
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default BookForm;