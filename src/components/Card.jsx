import React,{useState,useEffect} from 'react'
import Search from './Search'
import WeatherData from './WeatherData'
import axios from "axios";


function Card() {
    const [city, setCity] = useState("New york");
    const [data, setData] = useState({
      city : "",
      temp : "",
      humidity : "",
      wind : ""
    });
    const [icon,setIcon ] = useState("Clear");

    const apiKey = "7c8a85942c376a0b863c11a0127c3dc7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    const getData = async (cityname) => {
      console.log("getData called");
      await axios.get(apiUrl + `&q=${cityname}&appid=${apiKey}`)
      .then((response) => {
        console.log(response.data.weather[0].main);
        setIcon(response.data.weather[0].main);
        setData(() => {
        return {
          city : [response.data.name],
          temp : [response.data.main.temp],
          humidity : [response.data.main.humidity],
          wind : [response.data.wind.speed]
        }
      });
      })
      .catch((err) => {
        if(err){
          alert("Invalid City")
        }
      });
      
    };

    useEffect(()=>{      
      getData(city);
    },[])
  return (
    <div className='min-h-[70vh] w-[70vh] bg-gradient-to-br from-blue-300 to-violet-600 rounded-lg px-8 py-6'>
      <Search getData = {getData} setCity={setCity} city={city}/>
      <WeatherData city={data.city} temp={data.temp} humid={data.humidity} windSpeed={data.wind} icon={icon} />
    </div>
  )
}

export default Card
