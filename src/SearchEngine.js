import React, { useState } from "react";
import "./styles.css";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 15°C in ${city}`);
  }

  return (
    <div className="SearchEngine">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
