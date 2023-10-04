import React,{useEffect, useMemo,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table'
import styles from '../styles/MovieDatabase.module.css'
import stylesMainPage from '@/styles/MainPage.module.css'
import YouTubePopup from './YouTubePopup'
import {AiFillDownCircle,AiFillUpCircle} from 'react-icons/ai'
import SearchBox from './SearchBox'
import { useRouter } from 'next/router';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { fetchId } from '@/context/IdContext';

function MovieDatabase() 
{
    const [filteredData,setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(true); // Initialize loading status
    const [showPopup, setShowPopup] = useState(false);
    const { setId } = fetchId();
    const router = useRouter();
    const openPopup = () => {
        console.log("opening....",showPopup)
        setShowPopup(true);
        console.log("opening....",showPopup)
    };
    useEffect(() => {
        const fetchData = async () => {
        try {
            // Fetch your data here and set it to the data state
            const response = await fetch('/api/movie_database'); // Replace with your API endpoint
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
    const closePopup = () => {
        console.log("closing....")
        setShowPopup(false);
    };
    const redirectPage = (id)=>{
        setId(id)
        
          // Redirect to the details page with the "id" as a query parameter
        router.push({
            pathname: '/movie_details/info', // Replace with the actual pathname
            // query: { id }, // Pass the "id" as a query parameter
        });
    }
    const columns = [
        // { Header:'id',
        //   accessor:'id'},
        { Header:'title',
          accessor:'title'},
        { Header:'poster_link',
          accessor:'poster_link',
          Cell: ({ cell: { value } }) => (
            <div className={`${styles['table-row']}`}>
                <div className={`${styles.image_container} peer-autofill:`}>
                <Image
                    src={value}
                    alt="image not found" width={50} height={50}
                    className={`${styles.image} `} unoptimized
                />
                </div>
            </div>
          ),
        },
        // {
        //     Header:'Video',
        //     accessor:'trailer',
        //     Cell:({cell:{value}})=>(
        //         <button onClick={openPopup}>{showPopup}Watch Video</button>
        //     )
        // },
        { 
            Header:'Starring',
            accessor:'starring'
        },
        { 
            Header:'Director',
            accessor:'Directed by'
        },
    { Header:'Screen Play',
      accessor:'Screenplay by'},
    { Header:'Dialogue',
      accessor:'Dialogues by'},
    { Header:'Story',
      accessor:'Story by'},
    { Header:'Producers',
      accessor:'Produced by'},
    { Header:'Actor/Actress',
      accessor:'Starring'},
    { Header:'Cinematography',
      accessor:'Cinematography'},
    { Header:'Edited',
      accessor:'Edited by'},
    { Header:'Musics',
      accessor:'Music by'},
    { Header:'Production Company',
      accessor:'Productioncompany'},
    { Header:'Distributors',
      accessor:'Distributed by'},
    { Header:'Release date',
      accessor:'Release date'},
      { Header:'Running time',
      accessor:'Running time'},
      { Header:'Country',
      accessor:'Country'},
      { Header:'Language',
      accessor:'Language'},
      { Header:'Budget',
      accessor:'Budget'},
      { Header:'Box office',
      accessor:'Box office'},
      ] 
    const Columns = useMemo(()=>columns,[])
    // // const Data = useMemo(()=>movieData,[])
    // const Data = useMemo(()=>filteredData,[])
    const tableInstance = useTable({columns:Columns,data: filteredData},useGlobalFilter,useSortBy,usePagination)
    const {getTableProps,getTableBodyProps,headerGroups,rows,page,prepareRow,
        state:globalFilterState,
        setGlobalFilter,
        nextPage,previousPage,
        canNextPage,canPreviousPage,
        pageOptions,state:paginationState
        } = tableInstance
    const {globalFilter} = globalFilterState;
    const {pageIndex} = paginationState
    useEffect(()=>{
        console.log(Columns)
    })
    return (
        <div>
            {isLoading ? (
        <div className={``}> 
        <Box sx={{ width: '100%' }}>
          <LinearProgress className={`${stylesMainPage.mainPage__progress_bar}`} sx={{ backgroundColor: 'yellow' }} size={30}/>
    </Box>
        
    </div>
      ) : (
        <>
        <div className={`${styles.moviedatabase}`}>

            <div className={`${styles.moviedatabase__search} w-auto mx-5`}>
                <SearchBox filter={globalFilter} setFilter={setGlobalFilter}  />
            </div>
            <div className={`${styles.moviedatabase__container}`}>
            <table {...getTableProps()} className={`${styles.moviedatabase__table}`} style={{ border: '1px solid black' }}>
                <thead className={` ${styles.moviedatabase__header}`}>
                    {headerGroups.map((headerGroup,index)=>(
                        <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column,index)=>(
                                <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted?(column.isSortedDesc?<AiFillDownCircle/>:<AiFillUpCircle/>):''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className={` ${styles.moviedatabase__body}`}>
                    {page.map((row,index)=>{
                        prepareRow(row)
                        return(

                            <tr key={index} {...row.getRowProps()} className={`${styles.moviedatabase_row}`}  onClick={()=>redirectPage(row.original.id)}>
                            
                                {
                                    row.cells.map((cell,index)=>{
                                        return <td  className={`${styles.moviedatabase__columnCell}`}key={index} {...cell.getCellProps()}>

                                       {cell.render('Cell')}</td>
                                    })
                                }
                                
                            </tr>
                                       
                        )
                    })}
                </tbody>
            </table>
            </div>
        <div>
        
        <button className={`${stylesMainPage.mainPage__button}`} onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <span>Page</span>{' '}
        <strong>
        {pageIndex+1} of {pageOptions.length}
        </strong>{' '}
<button className={`${stylesMainPage.mainPage__button}`} onClick={() => nextPage()} disabled={!canNextPage}>Next</button>

             </div>
             
      {showPopup && 'love'}
      {showPopup && 
      (
        <YouTubePopup 
        isOpen={showPopup}
          videoId="COv52Qyctws"
          onClose={closePopup}
        />
      )
      }

        </div>

    </>)}
    </div>
  )
}

export default MovieDatabase

