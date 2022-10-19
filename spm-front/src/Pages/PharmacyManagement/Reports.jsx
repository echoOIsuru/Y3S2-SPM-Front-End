import React, { useEffect, useState, useRef } from 'react'
import BarChart from '../../Components/PharmacyManagementComponents/BarChart';
import DoughnutChart from '../../Components/PharmacyManagementComponents/DoughnutChart';
import PharmacyManagement from '../../Axios/PharmacyManagement';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function Reports() {

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

    /**
     * To download report
     */
    const pdfExportComponent = useRef(null);

    const download = () => {
        pdfExportComponent.current.save();
    }

    return (
        <div className="container">
            <PDFExport ref={pdfExportComponent}>
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
                                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>{prescriptions}</h5>
                                        </div>
                                    </div>
                                </div>
                                <br /><br />

                                <div className='row'>
                                    <div className="card shadow">
                                        <div className='card-header bg-warning'></div>
                                        <div className="card-body">
                                            <div className='card-title text-warning text-center font-weight-bold'>TOTAL INCOME</div>
                                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>Rs. {income} /=</h5>
                                        </div>
                                    </div>
                                </div>
                                <br /><br />

                                <div className='row'>
                                    <div className="card shadow">
                                        <div className='card-header bg-info'></div>
                                        <div className="card-body">
                                            <div className='card-title text-info text-center font-weight-bold'>TOTAL USERS</div>
                                            <h5 className='h5 mb-0 font-weight-bold text-gray-800 text-center'>{users}</h5>
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
            </PDFExport>

            <input type="button" value="Download" onClick={download} className="btn btn-secondary offset-md-9" />

        </div>

    )
}
