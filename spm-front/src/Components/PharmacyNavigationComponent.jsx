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
                <a class="nav-link collapsed" href="/dashboard">
                    <House/>
                    <span>     Dashboard</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <AnalyticsRounded/>
                    <span>  Reports</span>
                </a>
            </li>

            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                Other
            </div>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <AddCard/>
                    <span>  Add Prescrptions</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <AddToPhotos/>
                    <span>  Add Stocks</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <Assessment/>
                    <span>  View Prescrptions</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <Article/>
                    <span>  View Stocks</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <Settings/>
                    <span>  Setting</span></a>
            </li>

        </div>
    )
}

export default PharmacyNavigationComponetnt