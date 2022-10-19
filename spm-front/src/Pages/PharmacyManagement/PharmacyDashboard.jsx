import React, { useEffect } from 'react'
import PharmacyReports from '../../Components/PharmacyManagementComponents/PharmacyReports.jsx';
import PrescriptionsTable from '../../Components/PharmacyManagementComponents/PrescriptionsTable';

export default function PharmacyDashboard() {

  return (
    <div>
      <div className="container">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <span></span>
          <h1 class="h3 mb-0 text-gray-800">DASHBOARD</h1>
          <span></span>
        </div>
        <hr class="sidebar-divider" />

        {/* Reports */}

        <PharmacyReports />

        <br />

        {/* table */}

        <div className='row'>

          <div className='col'>
            <div className='card shadow text-center'>
              <div className='card-header bg-secondary text-white font-weight-bold text-gray-800'>RECENT PRESCRIPTIONS</div>
              <div className='card-body'>

                <PrescriptionsTable />

              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

    </div>

  )
}
