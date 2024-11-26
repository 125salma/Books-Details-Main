
import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { LuFileBarChart2 } from "react-icons/lu";



const ReadList = ({read}) => {
  console.log(read)
    const {bookName,author,image,tags,category,rating,yearOfPublishing,publisher,totalPages} = read;
    

    return (
       
        <div className="md:flex items-center shadow-xl m-8 p-8">

           <div>
            <img className="w-52" src={image} alt="" />
           </div>
           <div className="p-4">
           <h1 className="text-2xl font-bold">{bookName}</h1>
                 <p className="pt-4">By: <span className="font-bold">{author}</span></p>
    
                  <div className="flex items-center">
                  <h2 className="pt-4 pb-4"><span className="font-bold">Tag: </span>
                    <span className="px-4 text-[#23BE0A]">#{tags[0]}</span> 
                    <span className="px-10 text-[#23BE0A]">#{tags[1]}</span> 
                  </h2>
                    <p className="flex"> <CiLocationOn className="text-2xl mx-2"/>Year of Publishing: {yearOfPublishing}</p>
                  </div>
                  <div className="md:flex ">
                    <p className="flex"><IoMdContacts className="mr-2 text-2xl" />Publisher: {publisher}</p>
                    <p className="px-4 flex"><LuFileBarChart2 className="mr-2 text-2xl"/>page: {totalPages}</p>
                  </div>
                  <hr className="mt-2 mb-2"/>
                  <div className="md:flex">
                    <button className="btn border rounded-full p-2 text-[#328EFF] bg-blue-100 ">Catagory: {category}</button>
                    <button className="btn border rounded-full p-2 mx-4 text-[#FFAC33] bg-orange-100">Rating: {rating}</button>
                    <button className="btn border rounded-full p-2 bg-[#23BE0A] text-white">View Details</button>
                  </div>

           </div>
        </div>
        
        
    );
};

export default ReadList;