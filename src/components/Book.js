import React, { Component } from "react";
import { update, get } from "../BooksAPI";

/**
 * Component that renders queried books and also handles the changes in shelf
 *
 * @component
 */
class Book extends Component {
  state = {
    shelf: "",
  };

  componentDidMount() {
    this.getShelf();
  }

/**
   * Fetches the current book from API and updates the 
   * state of the shelf accordingly. This function only 
   * handles the books that is fetched in the main page. 
   * For the rest of the books coming from search function, it 
   * sets none as a default shelf state
   *
   * @function getShelf
   */
  getShelf = async () => {
    const currentBook = await get(this.props.book.id);
    if (currentBook.shelf) {
      this.setState({ shelf: currentBook.shelf });
    } else {
      this.setState({ shelf: "none" });
    }
  };

  /**
   * Updates the shelf of the book depending on the selection of the user
   * in dropdown select menu
   *
   * @function handleSelectShelf
   *
   * @returns all books from API
   */
  handleSelectShelf = async (event) => {
    this.setState({ shelf: event.target.value });
    try {
      await update(this.props.book, event.target.value);
      await this.props.getAllBooks();
    } catch (e) {
      throw new Error(e.message);
    }
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.image})`,
            }}
          />
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleSelectShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        {this.props.authors &&
          this.props.authors.map((author, id) => {
            return (
              <div key={id} className="book-authors">
                {author}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Book;
