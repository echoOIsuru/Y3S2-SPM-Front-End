import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from './image/1.png';
import img2 from './image/2.jpg';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';




export default function Report (p) {

    const[ada,setAda]=useState();
    const[grase,setGrase]=useState();
    const[jo,setJo]=useState();
    const[ma,setMa]=useState();
    const[accept,setAccept]=useState();
    const[reject,setReject]=useState();
    const[pending,setPending]=useState();
    const[total,setTotal]=useState();
  const [appointment, setAppointment] = useState([]);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
      );
    
    /**
     * Bar chart
     */
     function print() {

      window.print();
  
  }
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: true,
            text: 'Channeling Count',
          },
        },
      };
      const labels = ['Ada Lovelance', 'Grace Hopper', 'Margaret Hamilton','Johon Clark'];
    
      const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [ada,grase,ma,jo],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          },
        ],
      };

  
      function getTotalAppointment() {
        axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {
    
          console.log(res.data);
          setAppointment(res.data)
          var count = 0;
          for(let i=0; i<res.data.length; i++){
           
            count++
           setTotal(count) ;
           
            }
        })
      }
  

      function getAcceptedAppointment() {
        axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {
    
          console.log(res.data);
          setAppointment(res.data)
          var count = 0;
          for(let i=0; i<res.data.length; i++){
            if(res.data[i].status === 'Accepted' ) 
            count++
           setAccept(count) ;
           
            }
        })
      }


      function getRejectedAppointment() {
        axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {
    
          console.log(res.data);
          setAppointment(res.data)
          var count = 0;
          for(let i=0; i<res.data.length; i++){
            if(res.data[i].status === 'Rejected' ) 
            count++
           setReject(count) ;
           
            }
        })
      }


      function getPendingAppointment() {
        axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {
    
          console.log(res.data);
          setAppointment(res.data)
          var count = 0;
          for(let i=0; i<res.data.length; i++){
            if(res.data[i].status === 'Pending' ) 
            count++
           setPending(count) ;
           
            }
        })
      }











  function getAppointment1() {
    axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {

      console.log(res.data);
      setAppointment(res.data)
      var count = 0;
      for(let i=0; i<res.data.length; i++){
        if(res.data[i].doctorName === 'Ada Lovelance' ) 
        count++
       setAda(count) ;
       
        }
    })
  }

  function getAppointment2() {
    axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {

      console.log(res.data);
      setAppointment(res.data)
      var count = 0;
      for(let i=0; i<res.data.length; i++){
        if(res.data[i].doctorName === 'Grace Hopper' ) 
        count++
       setGrase(count) ;
       
        }
    })
  }


  function getAppointment3() {
    axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {

      console.log(res.data);
      setAppointment(res.data)
      var count = 0;
      for(let i=0; i<res.data.length; i++){
        if(res.data[i].doctorName === 'Johon Clark' ) 
        count++
       setJo(count) ;
       
        }
    })
  }


  function getAppointment4() {
    axios.get("http://localhost:8090/api/v1/appointment/23449").then((res) => {

      console.log(res.data);
      setAppointment(res.data)
      var count = 0;
      for(let i=0; i<res.data.length; i++){
        if(res.data[i].doctorName === 'Margaret Hamilton' ) 
        count++
       setMa(count) ;
       
        }
    })
  }





  useEffect(() => {
    getAppointment1();
    getAppointment2();
    getAppointment3();
    getAppointment4();
    getTotalAppointment();
    getAcceptedAppointment();
    getRejectedAppointment();

    getPendingAppointment()
  }, [])
  console.log('gg',ada);
  



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
          <a className="nav-link" href="/report/">PATIENT CHANNELING REPORT</a>
        </li>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    
        <li className="nav-item">
          <a className="nav-link" href="">ABOUT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br/>
<center>
<table>
<div className="container">
<div className='col mx-auto'>
  <div className="card shadow">
    <div className='card-header bg-success'></div>
    <div className="card-body">
    <div className=''>TOTAL APPOINTMENT</div>
     <center><h5 className=''> {total}</h5></center>
    </div>
  </div>
</div>
</div>

<br/>
<td>
<div className="container">
<div className='col mx-auto'>
  <div className="card shadow">
    <div className='card-header bg-success'></div>
    <div className="card-body">
      <div className=''>ACCEPTED APPOINTMENT</div>
      <center><h5 className=''> {accept}</h5></center>
    </div>
  </div>
</div>
</div>
</td>
<br/>

<td>
<div className="container">
<div className='col mx-auto'>
  <div className="card shadow">
    <div className='card-header bg-success'></div>
    <div className="card-body">
      <div className=''>REJECTED APPOINTMENT</div>
      <center> <h5 className=''> {reject}</h5></center>
    </div>
  </div>
</div>
</div>
</td>
<br/>
<td>
<div className="container">
<div className='col mx-auto'>
  <div className="card shadow">
    <div className='card-header bg-success'></div>
    <div className="card-body">
      <div className=''>PENDING APPOINTMENT</div>
      <center> <h5 className=''> {pending}</h5></center>
    </div>
  </div>
</div>
</div>
</td>
<br/>
</table>

</center>
    <center>
    <div className="container">
    <div className='col-xl-8'>
    <div className='card shadow'>
    <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>CHANNELING REPORT</div>
   
      <Bar options={options} data={data} />
  </div>
  </div>
  </div>
  </center>
  <center>
  <div className="combined_btn1">
                <button className="btn btn-success" style={{ marginLeft: "40px", marginBottom: "10px", width: "300px" }} onClick={print}>Print</button>
                </div>

  </center>
  </div>


  )
 
}
