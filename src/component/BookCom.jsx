import "./style.css";

export function BookCom(props1) {
  console.log(`this Props1 ${props1}`);
  return (
    <div className="book-card">
      <img
        className="book-cover"
        src={props1.bookDetails.coverImage}
        alt=""
        width="200"
        height="200"
      />
      <div className="book-details">
        <h4 className="book-title">{props1.bookDetails.Authoer}</h4>
        <h2 className="book-title">
          {props1.bookDetails.id} {props1.bookDetails.title}
        </h2>
        <p className="book-description"> {props1.bookDetails.description}</p>
      </div>
    </div>
  );
}
