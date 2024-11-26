
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getBookLocalstorage } from '../../../utility/localstorage';
import { useLoaderData, useParams } from 'react-router-dom';
import GrapList from '../GrapList/GrapList';
import { useEffect, useState } from 'react';


const ListPageGraph = () => {
  

const books = useLoaderData()
console.log(books)
const [appliedReadBooks, setAppliedReadBooks] = useState([])
console.log(appliedReadBooks)


useEffect(()=>{
  const storeListBooks = getBookLocalstorage()
 
  if(books.length>0){
  
  //for readbooklist
   const listReadBooks = Object.values(books).filter(book=>storeListBooks.includes(book.bookId));

 console.log(listReadBooks)
   
  setAppliedReadBooks(listReadBooks)

  }
  
},[])

    return (
        <div>
                  <h2 className="text-2xl font-bold text-center mt-4">Total Graph Data: {appliedReadBooks.length}</h2>
                   {
                    <GrapList appliedReadBooks={appliedReadBooks}></GrapList>
                   }

        </div>
    );
};

export default ListPageGraph;