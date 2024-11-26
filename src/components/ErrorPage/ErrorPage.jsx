import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-red-700 ml-4">ooPPs!!!!!!!</h2>
            <Link to="/"><button className="btn ml-4">Go back</button></Link>
        </div>
    );
};

export default ErrorPage;