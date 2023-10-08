import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Event from "./Event";


const EventDetails = () => {

    const [event, setEvent] = useState({});

    const { id } = useParams();

    const idInt = parseInt(id);

    const eventsData = useLoaderData();

    useEffect(()=>{

        const findEvent = eventsData.find(event => event.id === idInt);
        setEvent(findEvent);

    },[idInt, eventsData])

    return (
        <div>
            <Event event={event}></Event>
        </div>
    );
};

export default EventDetails;