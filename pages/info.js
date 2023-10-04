import React,{useState,useEffect} from 'react';
import styles from '@/styles/Info.module.css'
import {fetchId} from '@/context/IdContext'
import { useRouter } from 'next/router';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import axios from 'axios'
import Image from 'next/image'
import { FileWatcherEventKind } from 'typescript';

function Info() {
  const { id } = fetchId();
  const [filteredData,setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true); // Initialize loading status
  const router = useRouter();   
  // const id = router.query.id || fetchId().id;
    useEffect(() => {
    // Simulate fetching data from an API or other source
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Fetch your data here and set it to the data state
        if (id===null)
            {console.log("ID::",id)}
          
        const response = await fetch(`/api/get_movie_detail?id=${id}`); // Replace with your API endpoint
        const data = await response.json();
        setFilteredData(data);
        setIsLoading(false);
        localStorage.setItem('ID', id); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the data fetching function
  }, [id]);
  return (
    <>
      <div className={`${styles.info}`}>
          <div className='text-center font-bold'>{filteredData.title}</div>
          <div className={`${styles.info_table} flex-col md:flex-row`}>
            <div className={`${styles.video}`}>
                <Image src={filteredData.poster_link} width={300} height={600} alt="no image" unoptimized/>
            </div>
            <div className={`${styles.info_content}`}>
              content{filteredData.poster_link}
            </div>
          </div>
            <div>bond</div>
      </div>
      {JSON.stringify(filteredData)}
      
    </>
  );
}

export default Info;
