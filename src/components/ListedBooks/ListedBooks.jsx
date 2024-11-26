import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookLocalstorage } from "../../../utility/localstorage";
import WishList from "../WishList/WishList";
import { getBookLocalstorageWishList } from "../../../utility/localstorageWishList";
import ReadList from "../ReadList/ReadList";
import { RiArrowDropDownLine } from "react-icons/ri";
import './ListedBooks.css'


const ListedBooks = () => {
    const books = useLoaderData();
    //read books
    const [appliedReadBooks, setAppliedReadBooks] = useState([]);
    const [appliedWishBooks, setAppliedWishBooks] = useState([]);

    //wish books
    const [disPlayReadBooks, setDisplayReadBooks] = useState([]);
    const [disPlayWishBooks, setDisplayWishBooks] = useState([]);

    //console.log(disPlayReadBooks)

    const handleReadBooks = sorts => {
        //console.log(sorts)

        if (sorts === 'all') {
            setDisplayReadBooks(appliedReadBooks);
            setDisplayWishBooks(appliedWishBooks);
        }
        else if (sorts === 'Rating') {
            const sortBookReading = appliedReadBooks.slice().sort((x, y) => y.rating - x.rating);
            const sortBookWhish = appliedWishBooks.slice().sort((x, y) => y.rating - x.rating);

            setDisplayReadBooks(sortBookReading);
            setDisplayWishBooks(sortBookWhish);
        }
        else if (sorts === 'TotalPages') {
            const sortBookTotalpage = appliedReadBooks.slice().sort((x, y) => y.totalPages - x.totalPages);
            const sortBookWishTotalpage = appliedWishBooks.slice().sort((x, y) => y.totalPages - x.totalPages);

            setDisplayReadBooks(sortBookTotalpage);
            setDisplayWishBooks(sortBookWishTotalpage);
        }
        else if (sorts === 'YearOfPublishing') {
            const sortBookYear = appliedReadBooks.slice().sort((x, y) => y.yearOfPublishing - x.yearOfPublishing);
            const sortBookWishYear = appliedWishBooks.slice().sort((x, y) => y.yearOfPublishing - x.yearOfPublishing);
            setDisplayReadBooks(sortBookYear);
            setDisplayWishBooks(sortBookWishYear)
        }
    }

    useEffect(() => {
        const storeListBooks = getBookLocalstorage();
        const storeListBooks1 = getBookLocalstorageWishList();
        if (books.length > 0) {

            //for readbooklist
            const listReadBooks = Object.values(books).filter(book => storeListBooks.includes(book.bookId));
            //for wishbookList
            const listWishBooks = Object.values(books).filter(book => storeListBooks1.includes(book.bookId));


            setAppliedReadBooks(listReadBooks);
            setDisplayReadBooks(listReadBooks);

            setAppliedWishBooks(listWishBooks);
            setDisplayWishBooks(listWishBooks);

        }

    }, [])


    return (
        <div>
            <h2 className="text-2xl font-bold text-green-600">Books Items: {appliedReadBooks.length}</h2>

            <div className="myDev">
                <details className="dropdown mb-32">
                    <summary className="btn m-1 text-white bg-[#23BE0A] ">Sort By <RiArrowDropDownLine className="text-4xl" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleReadBooks('all')}><a>Sort By</a></li>
                        <li onClick={() => handleReadBooks('Rating')}><a>Rating</a></li>
                        <li onClick={() => handleReadBooks('TotalPages')}><a>Number of pages</a></li>
                        <li onClick={() => handleReadBooks('YearOfPublishing')}><a>Published year</a></li>
                    </ul>
                </details>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-blue-600 font-bold" aria-label="Read books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            disPlayReadBooks.map(read => <ReadList key={read.bookId} read={read}></ReadList>)
                        }

                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-green-600 font-bold"
                    aria-label="Wishlist books"
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            disPlayWishBooks.map(wish => <WishList key={wish.bookId} wish={wish}></WishList>)
                        }
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ListedBooks;