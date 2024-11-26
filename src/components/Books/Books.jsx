import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Books = ({books}) => {
    const {bookId,bookName,author,image,tags,category,rating} = books;
    return (
        
        <Link to={`books/${bookId}`}>
        <div className="card bg-base-100 w-96 border shadow-xl">
        <figure>
          <img  className='w-64 '
            src={image}
            alt="" />
        </figure>
        
        <div className="card-body">
          <div className="flex text-[#23BE0A] font-bold ">
          <h2 className="p-2 border bg-gray-100 rounded-xl">{tags[0]}</h2>
          <h2 className="mx-4 p-2 border bg-gray-100 rounded-xl ">{tags[1]}</h2>
          </div>
          
          <h2 className="card-title font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <hr />
          <div className="card-actions">
            <p>{category}</p>
             <div>
                <h2  className="flex">{rating} <FaRegStar className="text-2xl mx-4" /></h2>
             </div>
          </div>
        </div>
      </div>
        
</Link>

    );
};

export default Books;