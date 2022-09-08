import React, { useState, useEffect } from "react";
import axios from "axios"
import img1 from './image/1.png';
import img2 from './image/2.jpg';
import { useNavigate, useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "react-bootstrap";
export default function CreateAppointment() {

  const [patientNIC, setPatientNIC] = useState("");
  const [patientName,setPatientName] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); 
  const [status, setStatus] = useState("");
  const [AID, setAID] = useState("");
  const[ doctorName,setDoctorName]=useState("");
  const[g,setG]=useState([]);
  useEffect( ()=>{
    const getdoc= async ()=>{
      const req= await fetch("http://localhost:8090/api/v1/d");
      const getres= await req.json();
      console.log(getres);
      setG(await getres);
 
    }
    getdoc();
 
   },[]);




  function SendData(e) {
    e.preventDefault();
    if (window.confirm('Do you whant create Appointment?')) {

      const newAppointment = {

        patientNIC,
        patientName,
        doctorID:"2", 
        date, 
        time,
        status:"Pending",
        AID:"1",
        doctorName,
        g,
      }

  

      axios.post("http://localhost:8090/api/v1/appointment/", newAppointment).then((res) => {
        alert("APPOINTMENT Request SUCCESSFULL")
      }).catch((err) => {
        alert("err")
      })
    }
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
<div className="container">
  
    <div className="form-group">
      <h1><center>CREATE APPOINTMENT</center></h1>
      <form onSubmit={SendData}>


      <div className="" >
          <label for="name">Patient NIC</label>
          <input type="text" className="form-control"  id="name" placeholder="Enter Patient NIC"
            onChange={(e) => {

              setPatientNIC(e.target.value);
            }}required={true} />
        </div>
     

        <div className="">
          <label for="age">Patient Name</label>

          <input type="text" className="form-control" id="age" placeholder="Enter Patient Name"
            onChange={(e) => {

              setPatientName(e.target.value);
            }}

            required={true}/>
        </div>

        {/* <div className="text-success">
   
          <label for="nic">Doctor Name</label>
          <input type="text" className="form-control" id="nic" placeholder="Doctor Name"
            onChange={(e) => {
              setDoctorName(e.target.value);
            }} required={true}/>

        </div> */}
        {/* <div>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value="sss" href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div> */}
        <div>
<label className="">Doctor</label>
                 <select name="doctorname" className="form-control" onChange={(e)=>{ setDoctorName(e.target.value);}}>
                   <option>--Select doctor--</option>
                   {
                    g.map( (getcon)=>(
                   <option key={getcon.doctor} value={getcon.doctor }> { getcon.doctor}</option>
                     ))
                }
                 
                 </select>
             
                 </div>  

        <div className="">
          <label for="gender">Date</label>
          <input type="date" className="form-control" id="gender" placeholder="Enter Apointment Date"
            onChange={(e) => {
              setDate(e.target.value);
            }} required={true}/>

        </div>

        <div className="">
          <label for="email">Time</label>
          <input type="time" className="form-control" id="email" placeholder="Enter Appointment Time"
            onChange={(e) => {
              setTime(e.target.value);
            }} required={true} />

        </div>

    


       <br/>
       <center>
        <a className="btn btn-danger" href={"/home"}>
                <i className="fas fa-edit"></i>&nbsp;Cancel
       </a>
       &nbsp;
       <button type="submit" className="btn btn-primary">Submit</button>
      
       </center>
      </form>

    </div>

    </div>
    </div>
  )

}