import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  state = {
    loading: false,
  };

  setLoading = (loading) => {
    this.setState({ loading });
  };

  render() {
    return this.state.loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.length > 0 &&
                this.props.books.map((book) => {
                  return (
                    <li key={book.id}>
                      <Book
                        setLoading={this.setLoading}
                        shelf={this.props.shelf}
                        getAllBooks={this.props.getAllBooks}
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
}

export default BookShelf;
