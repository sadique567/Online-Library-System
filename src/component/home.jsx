import { useState } from "react";
import { Books } from "../utils/books";
import { BookList } from "./bookList";
import "./style.css"

export function Home() {
  const [searchText, setSearchText] = useState("");
  const [filterbook, setFilterbook] = useState(Books);

  function handelSearch() {
    const filteredBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterbook(filteredBooks);
  }

  return (
    <>
      <div className="search">
        <h1>Book Search</h1>
       <div>
         <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handelSearch}>Search</button>
       </div>
      </div>
      <BookList BooksData={filterbook} />
    </>
  );
}
