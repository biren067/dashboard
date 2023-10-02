import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/themes";
import { mockDataTeam } from "../../data/mockData";
import { movieListData } from "../../data/mockData";
import {FcReading} from "react-icons/fc";
import {FaLock} from "react-icons/fa";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {useState} from 'react'

const Movies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Movie Name",
      // flex: 1,
      maxWidth:200,
      cellClassName: "name-column--cell",
    },
    {
      field: "Directed by",
      headerName: "Directers",
      // type: "number",
      // flex:1,
      minWidth:150,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Produced by",
      headerName: "Producers",
      // flex: 1,
      minWidth:150,
      maxWidth:200,
    },
    {
      field: "Starring",
      headerName: "Actors",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Screenplay by",
      headerName: "ScreenPlay By",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Dialogues by",
      headerName: "Dialogues",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Story by",
      headerName: "Stories",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
{
      field: "Productioncompany",
      headerName: "Production Company",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Edited by",
      headerName: "Edited",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },    {
      field: "Cinematography",
      headerName: "Cinematography",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },    {
      field: "Distributed by",
      headerName: "Distributions",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },


    {
      field: "Release date",
      headerName: "Release date",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Running time",
      headerName: "Running time",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Music by",
      headerName: "Music",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
    {
      field: "Budget",
      headerName: "Budget",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
{
      field: "Box office",
      headerName: "Box office",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },

    {
      field: "Language",
      headerName: "Language",
      // flex: 1,
      minWidth:150,
      maxWidth:400,
    },
// {
//       field: "accessLevel",
//       headerName: "Information",
//       flex: 1,
//       renderCell: ({ row: { access } }) => {
//         return (
//           <Box
//             width="60%"
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             backgroundColor={
//               access === "Read More"
//                 ? colors.greenAccent[600]
//                 : access === "manager"
//                 ? colors.greenAccent[700]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//           >
//             {access === "Read More" && <FcReading />}
//             {access === "manager" && <SecurityOutlinedIcon />}
//             {access === "None" && <FaLock />}
//             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
//               {access}
//             </Typography>
//           </Box>
//         );
//       },
//     },
  ];
const [columnWidths, setColumnWidths] = useState({
    id: 100,
    name: 200,
    age: 150,
  });
   const handleColumnWidthChange = (newWidths) => {
    setColumnWidths(newWidths);
  };
  return (
    <Box m="20px">
      {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={movieListData} 
                  columns={columns}
                  pageSize={10}
                  autoPageSize
                  // rowsPerPageOptions={[5]}
                  // columnBuffer={8} // Specify the buffer for rendering columns
                  // onColumnWidthChange={handleColumnWidthChange} 
                  //  {...columnWidths}
         />
      </Box>
    </Box>
  );
};

export default Movies;