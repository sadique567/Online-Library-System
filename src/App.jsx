import { useState } from "react";
import "./App.css";
import { BookList } from "./component/bookList";
import "./component/style.css";
import { userContext } from "./utils/userContext";
/*
Boook List
*/
import { Books } from "./utils/books";
import { MyHeader } from "./component/header";
import { ContactUs } from "./component/contact";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";


function App() {
  // const [searchText, setSearchText] = useState("");
  // const [filterbook , setFilterbook] = useState(Books);
const [userName , setUserName] = useState("Mohd Sadique");
  // function handelSearch() {
  //   console.log("Search TExt", searchText);
  //   const filteredBooks = Books.filter((book) =>
  //     book.title.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   console.log("Filtered Book : ", filteredBooks);
  //   setFilterbook(filteredBooks);
  // }

  return (

     <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <MyHeader />
        <Outlet />
      </userContext.Provider>
    </Provider>
    // <Provider store={appStore}>

    // <userContext.Provider value={{loggedInUser: userName , setUserName}}>
    // <MyHeader></MyHeader>
    // <Outlet/>
    // </userContext.Provider>
    //   <div className="search">
    //     <div>
    //       <h1>Book Search</h1>
    //       <input
    //         type="text"
    //         className="search-input"
    //         onChange={(e) => setSearchText(e.target.value)}
    //       />
    //       <button onClick={handelSearch}>Search</button>
    //     </div>
    //   </div>

    //   <BookList BooksData={filterbook}></BookList>

    // </Provider>
  );
}

export default App;
