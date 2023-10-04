import React, { useEffect, useState } from "react";

export default function Home() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/api/upcoming")
      .then((response) => response.json())
      .then((data) => setFilteredData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Filtered Data</h1>
      <ul>
      {JSON.stringify(filteredData)}
        {/* {filteredData.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Date: {item.date}</p>
            <p>Description: {item.description}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
