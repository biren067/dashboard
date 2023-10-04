
import React,{useEffect,useRef,useState} from 'react';
import { useRouter } from 'next/router';
import {fetchId} from '@/context/IdContext'


function MovieDetails() {
  const [filteredData,setFilteredData] = useState([])
  let { id } = fetchId();
  const router = useRouter();
  const storedIdRef = useRef(id); 
   useEffect(() => {
     storedIdRef.current = localStorage.getItem('myContextId');
     const fetchData = async () => {
        try {
            // Fetch your data here and set it to the data state
            const url = `/api/get_movie_detail?id=${storedIdRef.current}`
            console.log("url::",url)
            const response = await fetch(url); // Replace with your API endpoint
            const data = await response.json();
            setFilteredData(data);
            // setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setIsLoading(false);
        }
        };

        fetchData();
  }, [storedIdRef]);

  return (
    <div>

    
      <p className='cursor-pointer'>Movie Details</p>

        <p>ID: {storedIdRef.current}</p>
        {JSON.stringify(filteredData)}



    </div>
  );
}

export default MovieDetails;
