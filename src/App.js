import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from './component/Data';
import Pagination from './component/Pagination';
// import ReactPaginate from 'react-paginate';
const App=()=>{
    const[users,userChange] = useState([]);
    const[loading,setLoading] = useState(false);
    const[total,upTotal] = useState();
    const[perPage] = useState();
    const[currentPage,upCurrentPage] = useState();
  useEffect(()=>{
    async function getData(){
      setLoading(true);
      var res = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
      upTotal(res.data.total_pages)
      userChange(res.data.data);
      setLoading(false);
    
  }
    getData();
  },[currentPage]);
  // change page
  const paginate = (pageNumber)=>{
    upCurrentPage(pageNumber);
  }
 
  return(<>
    <Data users={users} loading={loading} />
    <Pagination perPage={perPage} total={total} paginate={paginate} />
  </>)
  
}

export default App;