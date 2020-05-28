import React from "react";
import Search from "./components/Search";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import {getAll} from "./BooksAPI"

class BooksApp extends React.Component {
  state = {
    books:[]
  };

  componentDidMount (){
    getAll().then(books => 
      {
      this.setState({books})
      console.log(books)
      })
    console.log(this.state.books)
  }

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
