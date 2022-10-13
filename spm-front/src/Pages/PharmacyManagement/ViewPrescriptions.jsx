import React from 'react'
import { useNavigate } from 'react-router-dom';
import PrescriptionsTable from '../../Components/PharmacyManagementComponents/PrescriptionsTable';

export default function ViewPrescriptions() {

    const navigate = useNavigate();

    const cancel = () => {
        navigate('/pharmacy/pharmacy_dashboard');
    }

    return (
        <>
            <div>
                <div className="container">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <span></span>
                        <h1 class="h3 mb-0 text-gray-800">PRESCRIPTIONS</h1>
                        <span></span>
                    </div>
                    <hr class="sidebar-divider" />
                    <div className="row">
                        <div className="card shadow col-md-10 offset-md-1 offset-md-1">
                            <br />
                            <div className="card-body">
                                <form className='mx-auto'>
                                    <PrescriptionsTable />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <input type="button" value="Cancel" onClick={cancel} className="btn btn-secondary offset-md-10" />
                <br /><br />
            </div>
        </>
    )
}
