import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Appointment(p) {
  const [appointment, setAppointment] = useState([]);

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


    <div className="container">
      <h1>Appointment Details</h1>
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
    </div>




  )

}