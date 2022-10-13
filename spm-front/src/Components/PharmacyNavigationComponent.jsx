import { AddCard, AddToPhotos, AnalyticsRounded, Article, Assessment, House, Settings } from '@mui/icons-material'
import React from 'react'

function PharmacyNavigationComponetnt() {
    return (
        <div>
            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Main
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/pharmacy/pharmacy_dashboard">
                    <House/>
                    <span>     Dashboard</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link collapsed" href="/pharmacy/reports">
                    <AnalyticsRounded/>
                    <span>  Reports</span>
                </a>
            </li>

            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                Other
            </div>

            <li class="nav-item">
                <a class="nav-link collapsed" href="/pharmacy/add_prescription">
                    <AddCard/>
                    <span>  Add Prescrptions</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="/pharmacy/add_stock">
                    <AddToPhotos/>
                    <span>  Add Stocks</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="/pharmacy/view_prescriptions">
                    <Assessment/>
                    <span>  View Prescrptions</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="/pharmacy/view_stocks">
                    <Article/>
                    <span>  View Stocks</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="#">
                    <Settings/>
                    <span>  Setting</span></a>
            </li>

        </div>
    )
}

export default PharmacyNavigationComponetnt