

const Book = ({bookli}) => {
    const {bookId,bookName,author,image,tags,category,rating} = bookli
   console.log(bookli)
    return (
        <div>
            <div>
              <h2>{bookName}</h2>
            </div>
        </div>
    );
};

export default Book;