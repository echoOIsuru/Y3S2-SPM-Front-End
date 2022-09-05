import React, { useEffect, useState } from 'react'
import AdminNavigationComponetnt from './AdminNavigationComponetnt';

function NavigationBar() {
    let [userType, setUserType] = useState();

    useEffect(() => {
        setUserType("A")
    }, [])


    return (
        <div>
            <ul style={{ height: "100%" }} class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Easy <sup>Hospital </sup></div>
                </a>


                <hr class="sidebar-divider my-0" />

                {/* 
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li> */}

                {userType == 'A' && <AdminNavigationComponetnt />}


                <hr class="sidebar-divider d-none d-md-block" />

                {/* <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div> */}

                <div class="sidebar-card d-none d-lg-flex">
                    <img class="sidebar-card mb-3" height="100px" src="https://cdn.medifind.com/wp/2020/08/31184653/00_3_8-Major-Problems-with-the-US-Healthcare-System-Today_hero-768x510.png" alt="..." />
                    <p class="text-center mb-2"><strong>SE3080</strong>SPM</p>
                    <a class="btn btn-success btn-sm" href="">----</a>
                </div>

            </ul>
        </div>
    )
}

export default NavigationBar