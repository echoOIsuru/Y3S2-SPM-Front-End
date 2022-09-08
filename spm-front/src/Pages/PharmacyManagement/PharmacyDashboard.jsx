import React from 'react'
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
import { Bar, Doughnut } from 'react-chartjs-2';
import PrescriptionsTable from '../../Components/PharmacyManagementComponents/PrescriptionsTable';

export default function PharmacyDashboard() {

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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Medicines that will shortly run out of stock',
      },
    },
  };
  const labels = ['Amoxicillin', 'Meloxicam', 'Gabapentin', 'Entyvio', 'Metoprolol', 'Clindamycin', 'Pantoprazole'];

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40],
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

  /**
   * Doughnut chart
   */

  const data1 = {
    labels: ['March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: '# of Votes',
        data: [14515, 13780, 18820, 9870, 20250, 17550],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="container">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <span></span>
          <h1 class="h3 mb-0 text-gray-800">DASHBOARD</h1>
          <span></span>
        </div>
        <hr class="sidebar-divider" />

        {/* three cards */}

        <div className="row">

          <div className='col mx-auto'>
            <div className="card shadow">
              <div className='card-header bg-success'></div>
              <div className="card-body">
                <div className='card-title text-success text-center font-weight-bold'>TOTAL PRESCRIPTIONS</div>
                <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>24</h5>
              </div>
            </div>
          </div>

          <div className='col mx-auto'>
            <div className="card shadow">
              <div className='card-header bg-warning'></div>
              <div className="card-body">
                <div className='card-title text-warning text-center font-weight-bold'>TOTAL INCOME</div>
                <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>Rs. 14 578 /=</h5>
              </div>
            </div>
          </div>

          <div className='col mx-auto'>
            <div className="card shadow">
              <div className='card-header bg-info'></div>
              <div className="card-body">
                <div className='card-title text-info text-center font-weight-bold'>TOTAL PROFIT</div>
                <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>Rs. 4 321 /=</h5>
              </div>
            </div>
          </div>

        </div>
        <br />

        {/* charts */}

        <div className='row'>

          <div className='col-xl-8'>
            <div className='card shadow'>
              <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>STOCK REPORT</div>
              <div className='card-body'>

                <Bar options={options} data={data} />

              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card shadow'>
              <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>MONTHLY INCOME</div>
              <div className='card-body'>
                <br />

              <Doughnut data={data1} />

              </div>
            </div>
          </div>

        </div>
        <br />

        {/* table */}

        <div className='row'>

          <div className='col'>
            <div className='card shadow'>
              <div className='card-header bg-secondary text-white font-weight-bold text-gray-800'>RECENT PRESCRIPTIONS</div>
              <div className='card-body'>

              <PrescriptionsTable/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

    </div>

  )
}
