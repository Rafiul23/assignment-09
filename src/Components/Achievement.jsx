import { motion } from 'framer-motion';

const Achievement = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
            <div className="my-10">
            <h2 className="text-[#241468] text-center font-bold text-3xl">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 h-[350px] md:h-[200px] lg:h-[300px] mt-5 items-center lg:grid-cols-4 bg-[#241468]">
                <div className="text-center text-white font-bold ">
                    <h2 className="text-4xl">40</h2>
                    <p className="text-xl">Projects</p>
                </div>
                <div className="text-center text-white font-bold ">
                    <h2 className="text-4xl">100</h2>
                    <p className="text-xl">Clients</p>
                </div>
                <div className="text-center text-white font-bold ">
                    <h2 className="text-4xl">25</h2>
                    <p className="text-xl">Members</p>
                </div>
                <div className="text-center text-white font-bold ">
                    <h2 className="text-4xl">15</h2>
                    <p className="text-xl">Awards</p>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Achievement;