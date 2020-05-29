import React, { Component } from "react";
import { update } from "../BooksAPI";
class Book extends Component {
  state = {
    shelf: "none",
  };

  componentDidMount() {
    if (this.props.shelf) {
      this.setShelf();
    }
  }

  setShelf = () => {
    switch (this.props.shelf) {
      case "Currently Reading":
        this.setState({ shelf: "currentlyReading" });
        break;
      case "Want To Read":
        this.setState({ shelf: "wantToRead" });
        break;
      case "Read":
        this.setState({ shelf: "read" });
        break;
      default:
        this.setState({ shelf: "none" });
    }
  };

  handleSelectShelf = async (event) => {
    this.props.setLoading(true);
    this.setState({ shelf: event.target.value });
    try {
      await update(this.props.book, event.target.value);
      await this.props.getAllBooks();
      this.props.setLoading(false);
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
