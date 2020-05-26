import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";
import { debounce } from "debounce";

class Search extends React.Component {
  state = {
    query: "",
    books: [],
  };

  searchQuery = debounce(function(query, cb) {
    search(query).then((result) => cb(result));
  }, 200);

  updateQuery = (event) => {
    const query = event.target.value;
    this.setState({ query });

    if (query.length === 0) {
      this.setState({ books: [] });
    } else if (query.trim()) {
      this.searchQuery(query.trim(), (response) => {
        if (response.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: response });
        }
      });
    }
  };

     
  // handleInputChange = (event) => {
  //   const { value } = event.target;
  //   const { query } = this.state;
  //   console.log(1, query);
  //   this.setState(() => ({
  //     query: value,
  //   }));
  //   if (query !== "") {
  //     console.log(2, query);
  //     setTimeout(() => this.searchBooks(), 200);
  //   }
  // };

  // searchBooks = async () => {
  //   try {
  //     console.log(3, this.state.query);
  //     const books = await search(this.state.query);
  //     if (books) {
  //       console.log(books);
  //       this.setState(() => ({
  //         books,
  //       }));
  //     }
  //   } catch (e) {
  //     throw new Error(e.message);
  //   }
  // };

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
                onChange={this.updateQuery}
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
