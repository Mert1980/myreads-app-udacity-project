import React from "react";
import Book from "./Book";

function BookShelf(props) {

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {props.books.length > 0 &&
              props.books.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      title={book.title}
                      authors={book.authors}
                      image={book.imageLinks ? book.imageLinks.thumbnail : ""}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BookShelf;
