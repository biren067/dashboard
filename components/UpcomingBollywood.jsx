import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import styles from '@/styles/MainPage.module.css'
import MovieCard from '@/components/MovieCard'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


function UpcomingBollywood() {
  const [filteredData,setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(true); // Initialize loading status

      const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
// Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  useEffect(() => {
    // Simulate fetching data from an API or other source
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Fetch your data here and set it to the data state
        const response = await fetch('/api/upcoming_bollywood'); // Replace with your API endpoint
        const data = await response.json();
        setFilteredData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the data fetching function
  }, []);

  // Slice the data to display only the items for the current page
  const currentData = filteredData.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  // Calculate the range of page numbers to display
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pageNumbers = [];
  const maxPageButtons = 5;

  let startPage = currentPage - Math.floor(maxPageButtons / 2);
  startPage = Math.max(startPage, 1);
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
    {isLoading ? (
        <div className={``}> 
        <Box sx={{ width: '100%' }}>
          <LinearProgress className={`${styles.mainPage__progress_bar}`} sx={{ backgroundColor: 'yellow' }} size={30}/>
    </Box>
        
    </div>
      ) : (
        <>
        <section className= {` ${styles.mainPage} `}>
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap m-4">
                {
                    filteredData && filteredData.map((item,index)=>(
                        <MovieCard key={index} item={item}/>
                    ))
                }
  
      
        </div>
    </div>
    </section>
              {/* Pagination controls */}
      <div className={`${styles.mainPage__pagination}`}>
        <button className={`${styles.mainPage__button}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            // className={pageNumber === currentPage ? `${styles.mainPage__button_number}` : ''}
            
            className={` ${styles.mainPage__button_number} ${pageNumber=== currentPage ? 'bg-blue-500 border-blue-100' : 'text-blue'}`}
          >
            {pageNumber}
          </button>
        ))}
        <button className={`${styles.mainPage__button}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= filteredData.length}
        >
          Next
        </button>
      </div>
      {/* end of pagination */}
    </>)}
</div>
  )
}
export default UpcomingBollywood