import React from "react";
import Search from "./components/Search";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  render() {
    const App = () => {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <CurrentlyReading />
            <WantToRead />
            <Read />
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
