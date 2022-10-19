import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import PharmacyManagement from '../../Axios/PharmacyManagement';

export default function PharmacyReports() {

  const [prescriptions, setPrescriptions] = useState([]);
  const [income, setIncome] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    PharmacyManagement.getTotalPrescriptions()
      .then((data) => {
        setPrescriptions(data.data[0].count);
      }).catch((err) => {
        console.log("...1...");
      })

    PharmacyManagement.getTotalIncome()
      .then((data) => {
        setIncome(data.data[0].income);
      }).catch((err) => {
        console.log("...2...");
      })

    PharmacyManagement.getTotalUsers()
      .then((data) => {
        setUsers(data.data.length);
      }).catch((err) => {
        console.log("...3...");
      })

  }, [])

  


  return (
    <div>


      {/* three cards */}

      <div className="row">

        <div className='col mx-auto'>
          <div className="card shadow">
            <div className='card-header bg-success'></div>
            <div className="card-body">
              <div className='card-title text-success text-center font-weight-bold'>TOTAL PRESCRIPTIONS</div>
              <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>{prescriptions}</h5>
            </div>
          </div>
        </div>

        <div className='col mx-auto'>
          <div className="card shadow">
            <div className='card-header bg-warning'></div>
            <div className="card-body">
              <div className='card-title text-warning text-center font-weight-bold'>TOTAL INCOME</div>
              <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>Rs. {income} /=</h5>
            </div>
          </div>
        </div>

        <div className='col mx-auto'>
          <div className="card shadow">
            <div className='card-header bg-info'></div>
            <div className="card-body">
              <div className='card-title text-info text-center font-weight-bold'>TOTAL USERS</div>
              <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>{users}</h5>
            </div>
          </div>
        </div>

      </div>
      <br />

      {/* charts */}

      <div className='row'>

        <div className='col-xl-8'>
          <BarChart />
        </div>

        <div className='col'>
          <DoughnutChart />
        </div>

      </div>


    </div>

  )
}
