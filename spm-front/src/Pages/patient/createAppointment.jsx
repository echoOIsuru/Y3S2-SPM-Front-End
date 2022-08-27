import React, { useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'


export default function CreateAppointment() {


  const [patientNIC, setPatientNIC] = useState("");
  const [patientName,setPatientName] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); 
  const [status, setStatus] = useState("");

  function sendData(e) {
    e.preventDefault();
    if (window.confirm('Do you whant create Appointment?')) {

      const newAppointment = {

        patientNIC,
        patientName,
        doctorID, 
        date, 
        time,
        status:"pendding",

      }
      axios.post("//localhost:8090/api/v1/appointment/", newAppointment).then((res) => {
        alert("APPOINTMENT Request SUCCESSFULL")
      }).catch((err) => {
        alert("err")
      })
    }
  }
   
  return (

    <div>

<br />   <br /> 
    <br />   <br /> 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;
        <li className="nav-item">
          <a className="nav-link"  href="">APPOINTMENT DETAILS</a>
        </li>  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;
        <li className="nav-item">
          <a className="nav-link" href="">PATIENT CHANNELING REPORT</a>
        </li>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <li className="nav-item">
          <a className="nav-link" href="">ABOUT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div className="p-3 mb-2 bg-dark text-white">
      <h1><center>CREATE APPOINTMENT</center></h1>
      <form onSubmit={sendData}>


      <div className="text-warning" >
          <label for="name">Patient NIC</label>
          <input type="text" className="form-control"  id="name" placeholder="Enter Patient NIC"
            onChange={(e) => {

              setPatientNIC(e.target.value);
            }}required={true} />
        </div>
     

        <div className="text-info">
          <label for="age">patient Name</label>

          <input type="text" className="form-control" id="age" placeholder="Enter Patient Name"
            onChange={(e) => {

              setPatientName(e.target.value);
            }}

            required={true}/>
        </div>

        <div className="text-success">
   
          <label for="nic">Doctor Name</label>
          <input type="text" className="form-control" id="nic" placeholder="Doctor Name"
            onChange={(e) => {
              setDoctorID(e.target.value);
            }} required={true}/>

        </div>


        <div className="text-danger">
          <label for="gender">Date</label>
          <input type="text" className="form-control" id="gender" placeholder="Enter Apointment Date"
            onChange={(e) => {
              setDate(e.target.value);
            }} required={true}/>

        </div>

        <div className="text-primary">
          <label for="email">Time</label>
          <input type="text" className="form-control" id="email" placeholder="Enter Appointment Time"
            onChange={(e) => {
              setTime(e.target.value);
            }} required={true} />

        </div>

    


       
       <center>
        <a className="btn btn-warning" href={"/home"}>
                <i className="fas fa-edit"></i>&nbsp;cancel
       </a>
       &nbsp;
       <button type="submit" className="btn btn-primary">Submit</button>
      
       </center>
      </form>

    </div>

    </div>
  )

}