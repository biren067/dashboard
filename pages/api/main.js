import movieData from '@/data/tableData/movieDataOrg'

// ###################### Current Date ################
function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDateTwoMonthsAgo() {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 2);

  return currentDate;
}

export default function handler(req, res) {
//   console.log(data);
  const filteredData = movieData.filter((item) => 
    item.poster_link !== null &&
    item.poster_link !== "None" &&
    item.release_date !== null &&
    item.release_date !== "None" &&
    item.trailer !== null &&
    item.trailer !== "None" &&
    item.starring !== null && item.trailer !== "None" &&
    item.starring.length > 0 // Check if Starring is not an empty array
  );

  res.status(200).json(filteredData);
}
