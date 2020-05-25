import React from "react";

function CurrentlyReading() {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>CurrentlyReading</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyReading;
