// import data from '@/data/tableData/List_of_movies_in_2023_new.json'
import movieData from '@/data/tableData/movieDataOrg'
// ###################### Current Date ################
function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


export default function handler(req, res) {
  const targetDate = "2023-09-07"; // The date to filter by
  console.log("bond",movieData)
  const filteredData = movieData.filter((item) => 
  { const releaseDate = new Date(item.release_date);
    
    return (
    item.poster_link !== null 
    && item.poster_link !== "None" 
    && item.release_date !== null 
    && item.release_date !== "None" 
    && item.trailer !== null 
    && item.trailer !== "None" 
    && item.starring !== null
    && item.starring !== "None" 
    && item.starring.length > 0 
    && item.release_date >= getCurrentDate() 
  )

  }
  );
  res.status(200).json(filteredData);
   
}