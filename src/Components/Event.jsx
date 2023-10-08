

const Event = ({event}) => {

    const {title, price, description, imgUrls_1, imgUrls_2, imgUrls_3, imgUrls_4} = event;

    return (
        <div>
            <h2 className="text-4xl my-10 font-bold text-[#241468]">{title}</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <img src={imgUrls_1} className="w-full lg:h-[400px]"/>
                <img src={imgUrls_2} className="w-full lg:h-[400px]"/>
                <img src={imgUrls_3} className="w-full lg:h-[400px]"/>
                <img src={imgUrls_4} className="w-full lg:h-[400px]"/>
            </div>
            <p className="my-10">{description}</p>
            <p className="my-5 text-[#241468]">Price: ${price}</p>
        </div>
    );
};

export default Event;