import React, { useEffect, useState } from "react";
import srch from "../assets/search.png";

function Search({city,setCity,getData}) {

  return (
    <div className="flex justify-between items-center bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
      <input
        className="flex-1 px-4 py-2 rounded-md bg-transparent border-none outline-none"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div
        className="rounded-full w-8 cursor-pointer"
        onClick={() => getData(city)}
      >
        <img src={srch} className="w-6"/>
      </div>
      
    </div>
  );
}

export default Search;
