
const getBookLocalstorage = ()=>{
    const storeBookList = localStorage.getItem('book-store-list');
    if(storeBookList){
    return JSON.parse(storeBookList);
    }
    return [];
}

const saveBookList = id =>{
   const storeBookList = getBookLocalstorage()
   const exists = storeBookList.find(bookId=>bookId === id)
   if(!exists){
    storeBookList.push(id)
    localStorage.setItem('book-store-list',JSON.stringify(storeBookList))
   }

}
export {getBookLocalstorage,saveBookList}