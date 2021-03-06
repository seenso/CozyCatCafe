import React from "react";

function BookCard({ book, showSpec }) {
    return (
        <div className="BookCard">
            <h2>{book.title}</h2>
            <h3>Author: {book.author}</h3>
            <p>Category: {book.category}</p>
            <p>Pages: {book.pages}</p>
            <img src={book.image} alt={book.title}/>
            <button onClick={() => showSpec(book)}>See More</button>
        </div>
    );
}

export default BookCard;
