import axios from 'axios';
import {useCallback ,useEffect,useState } from 'react';
import img1 from './image/1.png';
import img2 from './image/2.jpg';
import Pagination from './Pagination';
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
          url: `http://localhost:8090/api/v1/d`
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

    <div>

      <div>
        <img src={img1} alt=""   style={{ width: '200px', height: '100px', marginLeft: '0px' }}/>
        <img src={img2} alt=""   style={{ width: '100px', height: '100px', float: 'right', marginRight: '90px' }}/>
        <br/>
        <a className="btn btn-warning"style={{  width: '75px', height: '35px',float: 'right', marginRight: '100px' }} href={"/add/"}>
                <i className="fas fa-edit"></i>Logout

              </a>
      </div>
<div> </div>
              <br/>     <br/>
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
     &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  
        <li className="nav-item">
          <a className="nav-link"  href="/appointments/">APPOINTMENT DETAILS</a>
        </li>  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;
        <li className="nav-item">
          <a className="nav-link" href="">PATIENT CHANNELING REPORT</a>
        </li>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    
        <li className="nav-item">
          <a className="nav-link" href="">ABOUT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br />   <br />


      <center><h1>Search Doctors</h1></center>

      
    <div className="container">
                <div class="fontuser" style={{ float: 'right' }}>
               
                    <input className='main-search' placeholder="Search" type="text" name="search" style={{ width: '200px', height: '30px', marginLeft: '50px' }} onChange={(e) => {
                        handleSearch(e);
                    }} />
                   

                </div>
   
              
      <br />   <br />  
      <table className="table ">
        <thead className="table-dark">
          <tr>

            {/* <th >ID</th> */}
            <th>Doctor </th>
            <th>specialist</th>
            {/* <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>status</th> */}
            <th>Acction</th>
           
          </tr>


        </thead>

        <tbody>
          {students.map((val) =>
            <tr key={val._id}>
          
              <td>{val.doctor}</td>
              <td>{val.s}</td> 
              {/* <td>{val.date}</td> 
              <td>{val.time}</td> 
              <td>{val.status}</td>  */}
             
              <td><a className="btn btn-warning" href={"/add/"}>
                <i className="fas fa-edit"></i>&nbsp;Channel

              </a>
                &nbsp;
               
              </td>
            </tr>
          )}

        </tbody>
      </table>


      <Pagination
  itemsCount={students.length}
  itemsPerPage={recordsPerPage}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  setindexOfLastItem={setindexOfLastItem}
  setindexOfFirstItem={setindexOfFirstItem}
  alwaysShown={false}
/>
    </div>
    </div>



  )

}






