import React,{useEffect,useState} from "react";
import Weather_data from '../data/Weather-data';

const Location=()=>{
    const [city,setCity] = useState("Mumbai");
    const [search,setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async() => {
            const url='api.openweathermap.org/data/2.5/forecast?q=${search}&&units=metric&appid=dbde76c7924170fe02629a7c40e3f8ef';
            const response= await fetch(url);
            console.log(response);
            const resJson=await response.json();
            setCity(resJson.main);
        };

        fetchApi();
    },[search] )

return(
    <>
    <div className="box">
        <div className="inputData">
            <input type="search"
            value={search}
            className="inputField"
            onChange={(event)=>{ setSearch(event.target.value)  } }/>
        </div>

        {
        /* {!city ? (
           <div className="errorMsg"> <p>No Data found</p> </div>
        ) :( */
        <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-map-marker-alt"></i> {search}
            </h2>
            <h1 className="temp">
            {city.temp}
            </h1>
            <h3> Min: {city.temp_min} | Max: {city.temp_max}</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div> 
        /*)*/

        } 
    </div>
    </>
)
}

export default Location;