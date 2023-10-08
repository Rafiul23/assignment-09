import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";


const Home = () => {

    const servicesData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl text-center my-10 font-bold">Our Services</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Home;