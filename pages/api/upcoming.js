import data from '@/data/tableData/List_of_movies_in_2023_new.json'

// ###################### Current Date ################
function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// const formattedDate = getCurrentDate();
// console.log(formattedDate); // Output will be in "2023-09-07" format
// #########################3

export default function handler(req, res) {
  const targetDate = "2023-09-07"; // The date to filter by
  const filteredData = data.filter((item) => item.release_date >= getCurrentDate());

  res.status(200).json(filteredData);
}