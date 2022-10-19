import { AddCard, AddToPhotos, AnalyticsRounded, Article, Assessment, House, Settings, GroupAdd, EventNote } from '@mui/icons-material'
import React from 'react'
import { faPenToSquare, faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DoctorNavigationComponent() {
    return (
        <div>
            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Main
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/onGoingAppointments">
                    <House />
                    <span> Dashboard</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link collapsed" href="/view/doctorReports">
                    <AnalyticsRounded />
                    <span> Reports</span>
                </a>
            </li>

            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                Other
            </div>

            <li class="nav-item">
                <a class="nav-link collapsed" href="/view/curedPatients">
                    <GroupAdd />
                    <span> Cured Patients</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="/view/appointementsList">
                    <EventNote />
                    <span>  Appointments List</span>
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="">
                    <Settings />
                    <span>  Setting</span></a>
            </li>

        </div>
    )
}

export default DoctorNavigationComponent