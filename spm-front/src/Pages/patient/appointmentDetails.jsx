import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from './Pagination';
export default function Appointment(p) {
  const [appointment, setAppointment] = useState([]);
  const [recordsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexOfFirstItem, setindexOfFirstItem] = useState(0);
  const [indexOfLastItem, setindexOfLastItem] = useState(3);
  function getAppointment() {
    axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {
      console.log(res.data);
      setAppointment(res.data)
    })

  }
 function deleteAppointment(id) {
    if (window.confirm('Are you sure do you whant to delete this Appointment?')) {
      axios.delete("http://localhost:8090/api/v1/appointment/" +id).then((res) => {
        alert("Success fully deleted");
        getAppointment();
      })
    }
  }


  useEffect(() => {
    getAppointment();
  }, [])


 
  return (

    <div>

  <br />   <br /> 
    <br />   <br /> 
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
          <a className="nav-link"  href="">APPOINTMENT DETAILS</a>
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

    <div className="container">



      <center><h1>Appointment Details</h1></center>
      <br />
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
          {appointment.map(val =>
            <tr key={val._id}>

              <td>{val. doctorName}</td>
              <td>{val. AID}</td> 
              <td>{val. date}</td> 
              <td>{val. time}</td> 
              <td>{val. status}</td> 
             
              <td><a className="btn btn-warning" href={"/edit/" + val._id}>
                <i className="fas fa-edit"></i>&nbsp;Edit

              </a>
                &nbsp;
                <a className="btn btn-danger" onClick={() => deleteAppointment(val._id)}>
                  <i className="far fa-trash"></i>&nbsp;Delete

                </a>
              </td>
            </tr>
          )}

        </tbody>
      </table>
      <Pagination
  itemsCount={appointment.length}
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