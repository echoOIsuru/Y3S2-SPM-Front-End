import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import img1 from './image/1.png';
import img2 from './image/2.jpg';


export default function EditStudent() {

  const { id } = useParams();
  const [patientNIC, setPatientNIC] = useState("");
  const [patientName, setPatientName] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [AID, setAID] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [g, setG] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    const getdoc = async () => {
      const req = await fetch("http://localhost:8090/api/v1/all_doctors");
      const getres = await req.json();
      console.log(getres);
      setG(await getres);

    }
    getdoc();

  }, []);








  useEffect(() => {
    axios.get("http://localhost:8090/api/v1/appointment/byid/" + id).then((res) => {
      console.log("gg wp", res.data.patientNIC)
      setPatientNIC(res.data.patientNIC)
      setPatientName(res.data.patientName)
      setDoctorID(res.data.doctorID)
      setDate(res.data.date)
      setTime(res.data.time)
      setStatus(res.data.status)
      setAID(res.data.AID)
      setDoctorName(res.data.doctorName)

    })
  }, [])


  function SendData(e) {
    e.preventDefault();
    if (window.confirm('Are you sure you wish to update this student?')) {

      const newAppointment = {


        patientNIC,
        patientName,
        doctorID,
        date,
        time,
        status,
        AID,
        doctorName,


      }
      axios.put("http://localhost:8090/api/v1/appointment/update/" + id, newAppointment).then((res) => {
        alert(res.data.status);
        navigate("/appointments/");
      }).catch((err) => {
        alert("update succesfull")
      })
    }
  }

  return (

    <div>
      <div>
        <img src={img1} alt="" style={{ width: '200px', height: '100px', marginLeft: '0px' }} />
        <img src={img2} alt="" style={{ width: '100px', height: '100px', float: 'right', marginRight: '90px' }} />
        <br />
        <a className="btn btn-warning" style={{ width: '75px', height: '35px', float: 'right', marginRight: '100px' }} href={"/add/"}>
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
                <a className="nav-link active" href="/patient-home">Home</a>
              </li>  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link" href="/appointments/">APPOINTMENT DETAILS</a>
              </li>  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;
              <li className="nav-item">
                <a className="nav-link" href="/report/">PATIENT CHANNELING REPORT</a>
              </li>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <li className="nav-item">
                <a className="nav-link" href="">ABOUT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>





      <div className="container">
        <h1><center>Update APPOINTMENT</center></h1>
        <form onSubmit={SendData}>


          <div className="" >
            <label for="name">Patient NIC</label>
            <input type="text" value={patientNIC} className="form-control" id="name" placeholder="Enter Patient NIC"
              onChange={(e) => {

                setPatientNIC(e.target.value);
              }} required={true} />
          </div>


          <div className="">
            <label for="age">patient Name</label>

            <input type="text" value={patientName} className="form-control" id="age" placeholder="Enter Patient Name"
              onChange={(e) => {

                setPatientName(e.target.value);
              }}

              required={true} />
          </div>


          <div>
            <label className="">Doctor</label>
            <select name="doctorname" className="form-control" onChange={(e) => { setDoctorName(e.target.value); }}>
              <option>--Select doctor--</option>
              {
                g.map((getcon) => (
                  <option key={getcon.email} value={getcon.firstName}> {getcon.firstName}</option>
                ))
              }

            </select>

          </div>



          {/* 
      <div className="">
 
        <label for="nic">Doctor Name</label>
        <input value={doctorName} type="text" className="form-control" id="nic" placeholder="Doctor Name"
          onChange={(e) => {
            setDoctorName(e.target.value);
          }} required={true}/>

      </div> */}


          <div className="">
            <label for="gender">Date</label>
            <input type="date" value={date} className="form-control" id="gender" placeholder="Enter Apointment Date"
              onChange={(e) => {
                setDate(e.target.value);
              }} required={true} />

          </div>

          <div className="">
            <label for="email">Time</label>
            <input type="time" value={time} className="form-control" id="email" placeholder="Enter Appointment Time"
              onChange={(e) => {
                setTime(e.target.value);
              }} required={true} />

          </div>




          <center>
            <a className="btn btn-warning" href={"/home"}>
              <i className="fas fa-edit"></i>&nbsp;cancel
            </a>
            &nbsp;
            <button type="submit" className="btn btn-primary" >Submit</button>

          </center>
        </form>

      </div>
    </div>

  )

}