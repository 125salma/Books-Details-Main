import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-around items-center shadow-xl rounded p-10">
            <div>
                <h1 className="text-6xl font-bold">Books to freshen up <br/>your bookshelf</h1>
                 <Link to="/list-book"><button className="btn bg-[#23BE0A] text-white my-8">View The List</button></Link>
            </div>
            <div>
                  <img className="w-80" src="https://img.favpng.com/7/11/10/the-dating-playbook-for-men-a-proven-7-step-system-to-go-from-single-to-the-woman-of-your-dreams-amazon-com-png-favpng-nG8vTXjmsnbwmzcvgfhPz1s6m.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;