import { useEffect, useState } from "react";
import Books from "../Books/Books";

const BooksList = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
      fetch('booksList.json')
      .then(res=>res.json())
      .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-12 mt-12">Books {books.length}</h2>
           <div className="grid md:grid-cols-3 gap-16">
                {
                    books.map(books=><Books key={books.bookId} books={books}></Books>)
                }
           </div>

        </div>
    );
};

export default BooksList;