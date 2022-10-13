
import { AssignmentTurnedInSharp, GroupOutlined, GroupTwoTone, GroupWork } from '@mui/icons-material';
import React from 'react'
import AdminPieChart from '../../Components/UserManagementComponents/AdminPieChart';
import Table from '../../Components/UserManagementComponents/Table';
import AdminLineChart from '../../Components/UserManagementComponents/AdminLineChart';


const Charts =
    <>
        {/* line chart */}
        <div class="col-xl-8 col-lg-7">
            <div class="card shadow mb-4">
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">DOCTORS OVERVIEW</h6>
                </div>
                <div class="card-body">
                    <AdminLineChart />
                </div>
            </div>
        </div>
        {/* bar chart */}
        <div class="col-xl-4 col-lg-5">
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

    </>



function AdminDashboard() {

    return (
        <div className='container'>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">DASHBOARD</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            {/* <div class="row">


                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        TOTAL USERS</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">15</div>
                                </div>
                                <div class="col-auto">
                                    <GroupOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        MONTHLY ACTIVE USERS</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">8</div>
                                </div>
                                <div class="col-auto">
                                    <GroupWork />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        TOTAL ADMINS</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
                                </div>
                                <div class="col-auto">
                                    <AssignmentTurnedInSharp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

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

                <div className='col mx-auto'>
                    <div className="card shadow">
                        <div className='card-header bg-warning'></div>
                        <div className="card-body">
                            <div className='card-title text-warning text-center font-weight-bold'>MONTHLY ACTIVE USERS</div>
                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>8</h5>
                        </div>
                    </div>
                </div>

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
            <br />
            <br />


            <div class="row">
                {Charts}

            </div>

            <div class="col">
                <div class="card shadow mb-4">
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">User Overview</h6>
                    </div>

                    <Table />



                </div>
            </div>



        </div>


    )
}

export default AdminDashboard