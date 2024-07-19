import { useState} from "react";
import "./TripList.css"
import {useFetch} from "../hooks/useFetch.jsx";
import "./Loader.css"; // We'll create this file next
function TripList() {
    const [url, setUrl] = useState("http://localhost:3000/trips");
    // const fetchTrips = useCallback(async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setTrips(data)
    // }, [url])
    // useEffect(() => {
    //     fetchTrips()
    // }, [fetchTrips]);
    //dependencies
    //const {data}= useFetch(url);

    const {data, loading, error} = useFetch(url, {type:"GET"})
    console.log(data);


    return (
        <div className="trip-list">
            <h2>My Trip list</h2>
            {error && <div className="trip-list"><p>An error occurred</p></div>}
            {loading &&
                <div className="trip-list">
                    <div className="loader">Loading...</div>
                </div>}
            {!data &&
                <div className="trip-list">No data found</div>}
            {data && !loading && !error &&
                <>
                    <div className="filter">
                        <button onClick={() => {
                            setUrl("http://localhost:3000/trips?location=USA")
                        }}>USA Trips
                        </button>
                        <button onClick={() => {
                            setUrl("http://localhost:3000/trips")
                        }}>All Trips
                        </button>

                    </div>

                    <ul>
                        {


                            data && data.map((trip) => (
                                <li key={trip.id}>
                                    <h3>{trip.title}</h3>
                                    <p>{trip.price}</p>
                                </li>
                            ))}
                    </ul>
                </>
            }


        </div>
    )
}

export default TripList
