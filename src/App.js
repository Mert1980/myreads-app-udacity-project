import React from "react";
import Search from "./components/Search";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { getAll } from "./BooksAPI";
import BookShelf from "./components/BookShelf";

/**
 * Component that renders bookshelves and links to search page
 *
 * @component
 */
class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getAllBooks();
  }

  /**
   * fetch all books from API
   *
   * @async
   * @function getAllBooks
   * @returns {Array} Array of objects
   */
  getAllBooks = () => {
    getAll().then((books) => {
      this.setState({ books });
    });

  };

  render() {
    const booksOnMainPage = this.state.books
    const App = () => {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf
              getAllBooks={this.getAllBooks}
              shelf={"Currently Reading"}
              books={this.state.books.filter(
                (book) => book.shelf === "currentlyReading"
              )}
            />
            <BookShelf
              getAllBooks={this.getAllBooks}
              shelf={"Want To Read"}
              books={this.state.books.filter(
                (book) => book.shelf === "wantToRead"
              )}
            />
            <BookShelf
              getAllBooks={this.getAllBooks}
              shelf={"Read"}
              books={this.state.books.filter((book) => book.shelf === "read")}
            />
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      );
    };
    return (
      <Router>
        <Route exact path="/">
          <App />
        </Route>
        <Route
          path="/search"
          render={() => (
            <Search booksOnMainPage={booksOnMainPage} getAllBooks={this.getAllBooks} />
          )}
        />
      </Router>
    );
  }
}

BooksApp.propTypes = {
  /**
   * API endpoint to fetch books
   */
  getAllBooks: PropTypes.func,
  /**
   * Shelf's name
   */
  shelf: PropTypes.string,
  /**
   * Array of book objects
   */
  books: PropTypes.arrayOf(PropTypes.object),
};

export default BooksApp;
