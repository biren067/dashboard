import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import MovieCard from '@/components/MovieCard'
import styles from '@/styles/MainPage.module.css'

function MainPage() {
  const [filteredData,setFilteredData] = useState(null)
  async function getApiData(){
        console.log("calling api data")
        try {
            const res = await axios.get("/api/main");

            if (res.status === 200) {
            setFilteredData(res.data); // Set the data using res.data
            } else {
            console.log("No Data Found");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }
  useEffect(() => {

    console.log("useEffect")
    fetch("/api/main")
      .then((response) => response.json())
      .then((data) => setFilteredData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
        <section className= {` ${styles.mainPage} `}>
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap">


{
                    filteredData && filteredData.map((item,index)=>(
                        <MovieCard key={index} item={item}/>
                    ))
                } 
      
      
        </div>
    </div>
    </section>
</div>
  )
}

export default MainPage