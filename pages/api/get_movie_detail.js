// import data from '@/data/tableData/List_of_movies_in_2023_new.json'
import movieData from '@/data/tableData/movieDataOrg'

// ###################### Current Date ################


export default function handler(req, res) {

  const filteredData = movieData.find((item) => 
  { const releaseDate = new Date(item.release_date);
    const itemId = parseInt(item.id);
    const reqId=parseInt(req.query.id);
    // console.log(itemId,req.query.id)
    // const ob = req.query.id   
    return (itemId===reqId)
    // return (ob) 
    // return item.id.id === ob.id
  
    // return  releaseDate >= new Date(getDateTwoMonthsAgo()) && releaseDate <= new Date(getCurrentDate());
    // return releaseDate >= getDateTwoMonthsAgo() && releaseDate <= getCurrentDate();
  }
  );
    // console.log(twoMonthsAgo)
  res.status(200).json(filteredData);
  // res.status(200).json({'filteredData':getDateTwoMonthsAgo(),"kk":getCurrentDate()});
   
}