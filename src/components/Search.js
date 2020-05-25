import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      books: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const { query } = this.state;
    this.setState(() => ({
      query: value,
    }));
    if (query !== "") {
      console.log(query);
      this.searchBooks(query);
    }
  };

  searchBooks = async (query) => {
    try {
      // console.log(query)
      const books = await search(query);
      if (books) {
        console.log(books);
        this.setState(() => ({
          books,
        }));
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
            {this.state.books.length > 0 &&
              this.state.books.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      authors={book.authors}
                      image={book.imageLinks ? book.imageLinks.thumbnail : ""}
                    />
                  </li>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;