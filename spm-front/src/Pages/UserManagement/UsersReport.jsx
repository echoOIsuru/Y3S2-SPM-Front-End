import React from 'react'
import AdminPieChart from '../../Components/UserManagementComponents/AdminPieChart'
import AdminLineChart from '../../Components/UserManagementComponents/AdminLineChart'

export default function UsersReport() {
    return (
        <div className='container'>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">REPORTS</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            <div class="row justify-content-md-center">
                <div className="col-9">
                    <div className="row">
                        <div class="col">
                            <div class="card shadow mb-4">
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">USER TYPES</h6>
                                </div>
                                <div class="card-body">
                                    <AdminPieChart />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <br />
                            <div className="row">
                                <div className='col mx-auto'>
                                    <div className="card shadow">
                                        <div className='card-header bg-success'></div>
                                        <div className="card-body">
                                            <div className='card-title text-success text-center font-weight-bold'>TOTAL USERS</div>
                                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>15</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className='col mx-auto'>
                                    <div className="card shadow">
                                        <div className='card-header bg-warning'></div>
                                        <div className="card-body">
                                            <div className='card-title text-warning text-center font-weight-bold'>MONTHLY ACTIVE USERS</div>
                                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>8</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className='col mx-auto'>
                                    <div className="card shadow">
                                        <div className='card-header bg-info'></div>
                                        <div className="card-body">
                                            <div className='card-title text-info text-center font-weight-bold'>TOTAL ADMINS</div>
                                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>3</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col">

                            <div class="card shadow mb-4">
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">DOCTORS OVERVIEW</h6>
                                </div>
                                <div class="card-body">
                                    <center>
                                        <AdminLineChart />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr />

                    <p align="right">
                        <button className='btn btn-primary btn-user' style={{ align: "" }}>
                            Generate Report
                        </button>
                    </p>

                </div>




            </div>
        </div>
    )
}