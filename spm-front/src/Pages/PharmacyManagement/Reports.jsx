import React from 'react'
import PharmacyReports from '../../Components/PharmacyManagementComponents/PharmacyReports';

export default function Reports() {
    return (
        <div className="container">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">REPORTS</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            <PharmacyReports/>
        </div>

    )
}
