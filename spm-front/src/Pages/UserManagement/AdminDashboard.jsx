
import { AssignmentTurnedInSharp, GroupOutlined, GroupTwoTone, GroupWork } from '@mui/icons-material';
import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, Legend
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";
import Table from '../../Components/UserManagementComponents/Table';

const data = [
    {
        name: "February",
        Anesthesiology: 4,
        Dermatology: 2,
        Family_medicine: 2
    },
    {
        name: "March",
        Anesthesiology: 3,
        Dermatology: 9,
        Family_medicine: 2
    },
    {
        name: "April",
        Anesthesiology: 2,
        Dermatology: 9,
        Family_medicine: 2
    },
    {
        name: "May",
        Anesthesiology: 2,
        Dermatology: 3,
        Family_medicine: 2
    },
    {
        name: "June",
        Anesthesiology: 1,
        Dermatology: 4,
        Family_medicine: 2
    },
    {
        name: "July",
        Anesthesiology: 2,
        Dermatology: 3,
        Family_medicine: 2
    },
    {
        name: "August",
        Anesthesiology: 3,
        Dermatology: 4,
        Family_medicine: 2
    }
];

const pieData = [
    {
        name: "Patients",
        value: 55
    },
    {
        name: "Doctors",
        value: 25
    },
    {
        name: "Admin",
        value: 15
    },
    {
        name: "Pharmacists",
        value: 5
    },

];
const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

const RADIAN = Math.PI / 180;



const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: "#ffff",
                    padding: "5px",
                    border: "1px solid #cccc"
                }}
            >
                <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
            </div>
        )

    }
    return null
}


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
                {/* line chart */}
                <div class="col-xl-8 col-lg-7">
                    <div class="card shadow mb-4">
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">DOCTORS OVERVIEW</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">

                                <AreaChart
                                    width={800}
                                    height={320}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="Anesthesiology"
                                        stackId="1"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="Dermatology"
                                        stackId="1"
                                        stroke="#82ca9d"
                                        fill="#82ca9d"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="Family_medicine"
                                        stackId="1"
                                        stroke="#ffc658"
                                        fill="#ffc658"
                                    />
                                </AreaChart>


                            </div>
                        </div>
                    </div>
                </div>
                {/* bar chart */}
                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">USER TYPES</h6>
                            <div class="dropdown no-arrow">
                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div class="dropdown-header">Dropdown Header:</div>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={pieData}
                                    color="#000000"
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                            </PieChart>

                        </div>
                    </div>
                </div>

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