import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf(props) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.length > 0 &&
              props.books.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      shelf={props.shelf}
                      getAllBooks={props.getAllBooks}
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

BookShelf.propTypes = {
  shelf: PropTypes.string,
  getAllBooks: PropTypes.func,
  book: PropTypes.object,
  title: PropTypes.string,
  authors: PropTypes.array,
  image: PropTypes.string,
};

export default BookShelf;
