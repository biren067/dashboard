import React,{useEffect, useMemo,useState} from 'react'
// import {movieData} from '@/data/tableData/movieData'
import {movieData} from '@/data/tableData/List_of_movies_in_2023'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table'
import styles from '../styles/Testing.module.css'
import YouTubePopup from './YouTubePopup'
import {AiFillDownCircle,AiFillUpCircle} from 'react-icons/ai'
import SearchBox from './SearchBox'

function Testing() {
      const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    console.log("opening....",showPopup)
    setShowPopup(true);
    console.log("opening....",showPopup)
  };
useEffect(() => {
  console.log("showPopup changed:", showPopup);
}, [showPopup]);
  const closePopup = () => {
    console.log("closing....")
    setShowPopup(false);
  };
     const columns = [
        { Header:'id',
      accessor:'id'},

      { Header:'title',
      accessor:'title'},
    
          {    Header:'poster_link',
                accessor:'poster_link',
            Cell: ({ cell: { value } }) => (
                <div className={`${styles['table-row']}`}>
            <div className={`${styles.image_container}`}>
            <img
                src={value}
                alt="image not found"
                className={`${styles.image}`}
            />
            </div>
            </div>
      ),},
      {
        Header:'Video',
        accessor:'trailer',
        Cell:({cell:{value}})=>(
            <button onClick={openPopup}>{showPopup}Play Trailer</button>
        )
      },
      { Header:'Director',
      accessor:'Directed by'},
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
    const Data = useMemo(()=>movieData,[])
    const tableInstance = useTable({columns:Columns,data: Data},useGlobalFilter,useSortBy,usePagination)
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
        <div className='w-auto mx-5'>
        <SearchBox filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()} style={{ border: '1px solid black' }} className='mt-10'>
                <thead>
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
                <tbody {...getTableBodyProps()}>
                    {page.map((row,index)=>{
                        prepareRow(row)
                        return(
                            <tr key={index} {...row.getRowProps()}>
                                {
                                    row.cells.map((cell,index)=>{
                                        return <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             <div>
             <span>Page</span>{' '}
             <strong>
                {pageIndex+1} of {pageOptions.length}
             </strong>{' '}
                <button className='border-2 bg-green-400' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
<button className='border-2 bg-green-400' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>

             </div>
             
            <div>Value is{showPopup}</div>
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

    
  )
}

export default Testing