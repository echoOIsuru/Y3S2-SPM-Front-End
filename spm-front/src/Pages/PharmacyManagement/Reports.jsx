import React from 'react'
import BarChart from '../../Components/PharmacyManagementComponents/BarChart';
import DoughnutChart from '../../Components/PharmacyManagementComponents/DoughnutChart';

export default function Reports() {

    const download = () => {
    }

    return (
        <div className="container">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">REPORTS</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />

            <div className='card shadow col-md-8 mx-auto'>
                <div className='card-body'>
                    {/* three cards */}

                    <div className="row">

                        <div className='col'>
                            <DoughnutChart />
                        </div>

                        <div className='col'>
                            <div className='row'>
                                <div className="card shadow">
                                    <div className='card-header bg-success'></div>
                                    <div className="card-body">
                                        <div className='card-title text-success text-center font-weight-bold'>TOTAL PRESCRIPTIONS</div>
                                        <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>24</h5>
                                    </div>
                                </div>
                            </div>
                            <br /><br />

                            <div className='row'>
                                <div className="card shadow">
                                    <div className='card-header bg-warning'></div>
                                    <div className="card-body">
                                        <div className='card-title text-warning text-center font-weight-bold'>TOTAL INCOME</div>
                                        <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>Rs. 14 578 /=</h5>
                                    </div>
                                </div>
                            </div>
                            <br /><br />

                            <div className='row'>
                                <div className="card shadow">
                                    <div className='card-header bg-info'></div>
                                    <div className="card-body">
                                        <div className='card-title text-info text-center font-weight-bold'>TOTAL PROFIT</div>
                                        <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>Rs. 4 321 /=</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className='row'>
                        <BarChart />
                    </div>
                </div>
            </div>

            <hr />

                <input type="button" value="Download" onClick={download} className="btn btn-secondary offset-md-9" />

        </div>

    )
}
