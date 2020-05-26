import React, { Component } from "react";
class Book extends Component {
  state = {};

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
              `url(${this.props.image})`,
            }}
          />
          <div className="book-shelf-changer">
            <select>
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
