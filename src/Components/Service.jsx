import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Service = ({ service }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const { id, thumbnail, title, price, description } = service

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="card bg-base-100">
                <figure><img src={thumbnail} className="h-[200px] w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0, 50)}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#241468] text-white"><Link to={`/events/${id}`}>See More</Link></button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Service;