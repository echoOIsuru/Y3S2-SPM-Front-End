import { AccountBox, PersonRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'




function TopNavigation() {
    const [user, setUser] = useState({})

    useEffect(() => {
        let data = sessionStorage.getItem('userLoginStorage');
        data = JSON.parse(data);
        setUser(data)
    }, [])

    const logout = (e) => {
        e.preventDefault()
        console.log("sdfsdfsdf")
        sessionStorage.setItem("userLoginStorage", "");
        window.location.reload()
    }

    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <ul class="navbar-nav ml-auto">

                <div class="topbar-divider d-none d-sm-block"></div>


                <div class="dropdownUser">
                    <span class="mr-4 d-none d-lg-inline text-gray-600 small">{user.firstName}</span>
                    <span class="mr-5 d-none d-lg-inline text-gray-600 small"><PersonRounded color="success" fontSize="large" /></span>


                    <div class="dropdownUser-content" >
                        <a href='/profile' className='btn btn-light' style={{ width: "100%" }}>Profile</a>
                        <button className='btn btn-light' onClick={logout} style={{ width: "100%" }}>Logout</button>
                    </div>
                </div>

            </ul>

        </nav>
    )
}

export default TopNavigation