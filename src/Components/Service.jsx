import { Link } from "react-router-dom";


const Service = ({ service }) => {

    const {id, thumbnail, title, price, description } = service

    return (
        <div className="card bg-base-100">
            <figure><img src={thumbnail} className="h-[200px] w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 50)}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#241468] text-white"><Link to={`/events/${id}`}>See More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Service;