import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

/**
 * Component that renders books in accordance with their shelves
 *
 * @component
 */
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
  /**
   * book object
   */
  book: PropTypes.object,
  /**
   * Book's title
   */
  title: PropTypes.string,
  /**
   * Book's authors
   */
  authors: PropTypes.array,
  /**
   * Book's cover image link
   */
  image: PropTypes.string,
  /**
   * Function to fetch all books from API
   */
  getAllBooks: PropTypes.func,
};

export default BookShelf;
