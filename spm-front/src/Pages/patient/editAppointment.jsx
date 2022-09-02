import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"



export default function EditStudent() {
    
const {id}=useParams();
    const [patientNIC, setPatientNIC] = useState("");
    const [patientName,setPatientName] = useState("");
    const [doctorID, setDoctorID] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState(""); 
    const [status, setStatus] = useState("");
    const [AID, setAID] = useState("");
    const[ doctorName,setDoctorName]=useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8090/api/v1/appointment/byid/" +id).then((res) => {
        console.log("gg wp",res.data.patientNIC)
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
        doctorID ,
        date, 
        time,
        status,
        AID,
        doctorName,


      }
      axios.put("http://localhost:8090/api/v1/appointment/update/" +id, newAppointment).then((res) => {
        alert(res.data.status);
        navigate("/");
      }).catch((err) => {
        alert("update succesfull")
      })
    }
  }

  return (






    
    <div className="p-3 mb-2 bg-dark text-white">
    <h1><center>Update APPOINTMENT</center></h1>
    <form onSubmit={SendData}>


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
        <input value={doctorName} type="text" className="form-control" id="nic" placeholder="Doctor Name"
          onChange={(e) => {
            setDoctorName(e.target.value);
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


)

}