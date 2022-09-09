import { AddModerator, AnalyticsRounded, House, ManageAccounts, Settings } from '@mui/icons-material'
import React from 'react'

function AdminNavigationComponetnt() {
    return (
        <div>
            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Main
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/dashboard">
                    <House />
                    <span>     Dashboard</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <AnalyticsRounded />
                    <span>  Reports</span>
                </a>
            </li>

            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                Other
            </div>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <AddModerator />
                    <span>  Add User</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="/user-management">
                    <ManageAccounts />
                    <span>  User Management</span></a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <Settings />
                    <span>  Setting</span></a>
            </li>



        </div>
    )
}

export default AdminNavigationComponetnt