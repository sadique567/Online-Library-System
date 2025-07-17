import { Link } from "react-router-dom";
import { BookCom } from "./BookCom";
import "./style.css";
import { useEffect } from "react";
// import { useContext } from "react";
// import { userContext } from "../utils/userContext";

export function BookList(props) {
  console.log("My Filtered book", props);
  useEffect(() => {
    console.log("Effect CAlled");
  }, []);
  // const { setUserName } = useContext(userContext);
  return (
    <>


      {/* <input type="text" name=""
       onChange={(e) => setUserName(e.target.value)} 
       /> */}
      <div className="book-list">
        {props.BooksData.map((data) => (
          <Link to={`/book/${data.id}`} key={data.id}>
            <BookCom  bookDetails={data} />
          </Link>
        ))}

        {/* <BookCom bookDetails={props.BooksData[0]}></BookCom>
    <BookCom bookDetails={props.BooksData[1]}></BookCom>
    <BookCom bookDetails={props.BooksData[2]}></BookCom>
    <BookCom bookDetails={props.BooksData[3]}></BookCom> */}
      </div>
    </>
  );
}
