import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";
import { debounce } from "debounce";
import PropTypes from "prop-types";

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
            <ol className="books-grid">
              {this.state.books.length > 0 &&
                this.state.books.map((book) => {
                  return (
                    <li key={book.id}>
                      <Book
                        book={book}
                        title={book.title}
                        authors={book.authors}
                        image={book.imageLinks ? book.imageLinks.thumbnail : ""}
                        getAllBooks={this.props.getAllBooks}
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
}

Search.propTypes = {
  book: PropTypes.object,
  title: PropTypes.string,
  authors: PropTypes.array,
  image: PropTypes.string,
  getAllBooks: PropTypes.func,
};

export default Search;
