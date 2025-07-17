import { useParams } from "react-router-dom";
import { Books } from "../utils/books";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import "./bookDetails.css"; 

export function BookDetails() {
  const params = useParams();
 const book = Books.find(book => book.id === Number(params.id));

  const dispatch = useDispatch();

  function handleAddBook(item) {
    dispatch(addItem(item));
  }

  function handleRemoveItem() {
    dispatch(removeItem());
  }

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div className="book-details-container">
      <img src={book.coverImage} alt={book.title} className="book-image" />
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-description">{book.description}</p>
        <div className="book-buttons">
          <button className="add-btn" onClick={() => handleAddBook(book)}>
            Add to Cart
          </button>
          <button className="remove-btn" onClick={handleRemoveItem}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}
