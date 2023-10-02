import React from 'react';
import { useTable } from 'react-table';

function App() {
  // Sample data with an "image" property
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Rocky_Aur_Rani_Ki_Prem_Kahani.jpg/220px-Rocky_Aur_Rani_Ki_Prem_Kahani.jpg', // Image URL
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        image: 'https://upload.wikimedia.org/wikipedia/en/8/81/Blind_film_poster.jpeg?20230627142057', // Image URL
      },
      // Add more data as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // Accessor for the "id" property
      },
      {
        Header: 'Name',
        accessor: 'name', // Accessor for the "name" property
      },
      {
        Header: 'Age',
        accessor: 'age', // Accessor for the "age" property
      },
      {
        Header: 'Image',
        accessor: 'image', // Accessor for the "image" property
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="User" style={{ width: '200px', height: 'auto' }} />
        ),
      },
    ],
    []
  );

  // Create a table instance using react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <table {...getTableProps()} style={{ border: '1px solid black' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
