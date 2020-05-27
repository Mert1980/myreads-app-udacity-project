import React, { Component } from "react";
import { update } from "../BooksAPI";
class Book extends Component {
  state = {
    shelf: "none",
  };

  handleSelectShelf = (event) => {
    this.setState({
      shelf: event.target.value,
    });
    setTimeout(() => this.updateShelf(), 400);
  };

  updateShelf = async () => {
    try {
      await update(this.props.book, this.state.shelf);
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
