import React from "react";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { getAll } from "./BooksAPI";
import BookShelf from "./components/BookShelf";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books });
      console.log(books)
    });
  }

  render() {
    const App = () => {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf
              title={"Currently Reading"}
              books={this.state.books.filter(
                (book) => book.shelf === "currentlyReading"
              )}
            />
            <BookShelf
              title={"Want To Read"}
              books={this.state.books.filter(
                (book) => book.shelf === "wantToRead"
              )}
            />
            <BookShelf
              title={"Read"}
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
        <Route path="/search" render={() => <Search />} />
      </Router>
    );
  }
}

export default BooksApp;
