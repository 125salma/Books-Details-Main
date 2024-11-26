import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { getBookLocalstorage, saveBookList } from "../../../utility/localstorage";
//import { useState } from "react";
import { saveBookListWishList } from "../../../utility/localstorageWishList";
import { useState } from "react";

const BookDetails = () => {

    const [loading, setLoading] = useState(true);
    const books = useLoaderData();
    //console.log(books)
    const { bookId } = useParams();
    const idIn = parseInt(bookId);
    const singleBook = books.find(book => book.bookId === idIn);
    console.log(singleBook)
     
    
    //taken from read localstorage
    const localReadCheck = getBookLocalstorage();
    console.log(localReadCheck)
    const readCheck = localReadCheck.includes(idIn);

    //check readlist button
    const handleBookReadList = () => {
        setLoading(false);

        if (readCheck) {
            toast('You have Already Read this Books!');
        }
        else {
            saveBookList(idIn);
            toast('Books Added to Read this List');
        }

    }
    //check wishlist button
    const handleBookWishList = () => {

        if (readCheck) {
            toast('You have Already Read this Books!');
        }
        else {
            saveBookListWishList(idIn);
            toast('Books Added to Read this List');

        }

    }

    return (
        <div>
             
            <h2 className="text-2xl font-bold mt-6">Book Details: {bookId}</h2>
            <div className="grid md:grid-cols-4 mt-4">
                <div className=" col-span-2">
                    <img src={singleBook.image} alt="" />
                </div>
                <div className=" col-span-2 p-6 ">
                    <h1 className="text-4xl font-bold">{singleBook.bookName}</h1>
                    <p className="pt-4 pb-4">By: <span className="font-bold">{singleBook.author}</span></p>
                    <hr className=" pb-4" />
                    <p className="pb-4">{singleBook.category}</p>
                    <hr className="pb-4" />
                    <p className="pt-4 pb-4"><span className="font-bold">review: </span>{singleBook.review}</p>
                    <h2 className="pt-4 pb-4"><span className="font-bold">Tag: </span>
                        <span className="px-4 text-[#23BE0A]">#{singleBook.tags[0]}</span>
                        <span className="px-4 text-[#23BE0A]">#{singleBook.tags[1]}</span>
                    </h2>
                    <hr className="mb-4" />
                    <table >
                        <tbody>
                            <tr>
                                <td>Number of Pages: </td>
                                <td><span className=" font-bold px-6">{singleBook.totalPages}</span></td>
                            </tr>
                            <tr>
                                <td>Publisher:</td>
                                <td><span className=" font-bold px-6"> {singleBook.publisher}</span></td>
                            </tr>
                            <tr>
                                <td>Year of Publishing:</td>
                                <td><span className=" font-bold px-6">{singleBook.yearOfPublishing}</span></td>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <td><span className=" font-bold px-6">{singleBook.rating}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-6">
                        <button onClick={handleBookReadList} className="btn">Read</button>
                        <button onClick={handleBookWishList} className="btn mx-6 bg-[#50B1C9] text-white">WishList</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookDetails;