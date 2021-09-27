import { resetBookForm } from "./bookForm";
import { getBookOwnerships } from "./bookOwnerships";

export const getAllBooks = () => {

        return (
            fetch("/books", {
                credentials: "include",
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            .then(r => r.json())
            .catch(error => {
                console.log("Error: ", error);
            })
        )
    
}

export const createBook = book => {
        return fetch("/books", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(book)
        })
        .then(r => r.json())
}