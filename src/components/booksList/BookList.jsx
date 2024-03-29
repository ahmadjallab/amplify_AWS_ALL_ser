import "./bookslest.css";
import { books } from "../../data/books";
import Book from "../Book";



const BookList = () => {

  return (
    <div className="main-body">
      <h1 className="main-title">
      
        Best Sellers <span>in Books</span>
      </h1>
      <h4 className="date">January 2023</h4>
      <article className="book-list">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </article>
      <section className="bottom">
        <h5 className="bottom-title">
          Amazon-bestsellers-books using <span>React</span>
        </h5>
        <h5 className="bottom-dy">
          AJcode 2024
        </h5>
      </section>
    </div>
  );
};

export default BookList;