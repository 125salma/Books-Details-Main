
const getBookLocalstorageWishList = ()=>{
    const storeBookList = localStorage.getItem('book-store-wish-list');
    if(storeBookList){
    return JSON.parse(storeBookList);
    }
    return [];
}

const saveBookListWishList = id =>{
   const storeBookList = getBookLocalstorageWishList()
   const exists = storeBookList.find(bookId=>bookId === id)
   if(!exists){
    storeBookList.push(id)
    localStorage.setItem('book-store-wish-list',JSON.stringify(storeBookList))
   }

}
export {getBookLocalstorageWishList,saveBookListWishList}