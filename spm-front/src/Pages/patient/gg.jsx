import axios from 'axios';
import {useCallback ,useEffect,useState } from 'react';

export default  function SearchReacord(){
const [students, setstudents] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [indexOfFirstItem, setindexOfFirstItem] = useState(0);
const [indexOfLastItem, setindexOfLastItem] = useState(3);
const [recordsPerPage] = useState(3);
const [retrievedData, setretrievedData] = useState([])

//fetch and set retrived data 
const fetchData = useCallback(async () => {
  try {
      const studentsData = await axios({
          method: 'GET',
          url: `http://localhost:8090/api/v1/appointment`
      })
      setstudents(studentsData.data)
      setretrievedData(studentsData.data)
  } catch (error) {
      alert(error);
  }
}, [])

useEffect(() => {
  fetchData()
}, [fetchData])

    //filter data
    const filterData = (obj, key) => {

      const results = obj.filter(o =>
          Object.keys(o).some(k => o[k].toString().toLowerCase().includes(key.toLowerCase())));

      setstudents(results);

  }

  //search function
  const handleSearch = (e) => {
      const k = e.target.value.toLowerCase()

      filterData(retrievedData, k);


  }


  return (
 
    <div className="container">
                <div class="fontuser" style={{ float: 'right' }}>
                <br />   <br />   
                    <input className='main-search' placeholder="Search" type="text" name="search" style={{ width: '400px', height: '40px', marginLeft: '100px' }} onChange={(e) => {
                        handleSearch(e);
                    }} />
                   

                </div><br />
   

                <br />   <br />   <br />

      <center><h1>Appointment Details</h1></center>
      <br />   <br />   <br />
      <table className="table ">
        <thead className="table-dark">
          <tr>

            {/* <th >ID</th> */}
            <th>Doctor </th>
            <th>Appointment ID</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>status</th>
            <th>Acction</th>
           
          </tr>


        </thead>

        <tbody>
          {students.map((val) =>
            <tr key={val._id}>
          
              <td>{val.doctorName}</td>
              <td>{val.AID}</td> 
              <td>{val.date}</td> 
              <td>{val.time}</td> 
              <td>{val.status}</td> 
             
              <td><a className="btn btn-warning" href={"/edit/" + val._id}>
                <i className="fas fa-edit"></i>&nbsp;Edit

              </a>
                &nbsp;
               
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>




  )

}






