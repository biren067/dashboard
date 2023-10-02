import React,{useEffect, useMemo,useState} from 'react'
import {movieData} from '@/data/tableData/movieData'
import {useTable} from 'react-table'
import styles from '../styles/Testing.module.css'
import YouTubePopup from './YouTubePopup'

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
        Header:'trailer',
        accessor:'trailer',
        Cell:({cell:{value}})=>(
            <button onClick={openPopup}>{showPopup}Play Trailer</button>
        )
      },

] 
    const Columns = useMemo(()=>columns,[])
    const Data = useMemo(()=>movieData,[])
    const tableInstance = useTable({columns:Columns,data: Data})
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance
    useEffect(()=>{
        console.log(Columns)
    })
    return (
        <>
            <table {...getTableProps()} style={{ border: '1px solid black' }} className='mt-10'>
                <thead>
                    {headerGroups.map((headerGroup)=>{
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row)=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             {/* <button onClick={openPopup}>{showPopup}Open Video</button> */}
             
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

        </>

    
  )
}

export default Testing