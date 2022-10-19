import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import UserManagement from '../../Axios/UserManagement';
export default function UserProfile() {

    const [val, setVal] = useState("https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png")
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem("userLoginStorage"))

        UserManagement.loginUser({ _id: data._id }).then(res => {
            //console.log(res.data)
            setInputs(res.data);
        }).catch(err => {
            console.log(err)
        })

    }, [])

    const handleOnChange = (event) => {
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value;

        if (name == "myfile") {
            var file = URL.createObjectURL(event.target.files[0])
            console.log(file)
            setVal(file)

        }

        setInputs(values => ({ ...values, [name]: value }))
    }

    const updateUser = (e) => {
        e.preventDefault()

        let temp = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            address: inputs.address,
            city: inputs.city,
            userType: inputs.userType,
        }

        UserManagement.updateUser(inputs._id, temp).then(res => {
            console.log(res.data)
            window.alert(`User ${temp.firstName} updated successfully!`)
            sessionStorage.setItem("userLoginStorage", JSON.stringify(inputs))
            //navigation('/')
        }).catch(e => {

            console.log(e, "error")

        })


    }

    return (
        <div className='container'>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">PROFILE</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            <div class="row">
                <div class="row justify-content-md-center">
                    <div className="col-9" style={{ backgroundColor: "white", padding: "20px", marginBottom: "20px" }}>
                        <form onSubmit={updateUser} class="" >
                            <div className="row justify-content-md-center">
                                <div className="col-6">
                                    <input type="text" class="form-control " name="firstName" value={inputs.firstName}
                                        onChange={handleOnChange}
                                        placeholder="Enter First Name" required />
                                    <br />
                                    <input type="text" class="form-control" name="lastName" value={inputs.lastName}
                                        onChange={handleOnChange}
                                        placeholder="Enter Last Name" required />
                                    <br />
                                    <input type="email" class="form-control " name="email" value={inputs.email}
                                        onChange={handleOnChange}
                                        placeholder="Enter Email Address" disabled />
                                    <br />
                                    <textarea class="form-control " rows="4" cols="50" name="address" value={inputs.address}
                                        onChange={handleOnChange}
                                        placeholder="Enter Address" required />
                                    <br />

                                    <select name="city" class="form-control"
                                        onChange={handleOnChange} required>
                                        <option value={inputs.city} defaultChecked={true}>{inputs.city}</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Kalutara">Kalutara</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Matale">Matale</option>
                                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Matara">Matara</option>
                                        <option value="Hambantota">Hambantota</option>
                                        <option value="Jaffna">Jaffna</option>
                                        <option value="Kilinochchi">Kilinochchi</option>
                                        <option value="Vavuniya">Vavuniya</option>
                                        <option value="Mullaitivu">Mullaitivu</option>
                                        <option value="Batticaloa">Batticaloa</option>
                                        <option value="Ampara">Ampara</option>
                                        <option value="Trincomalee">Trincomalee</option>
                                        <option value="Kurunegala">Kurunegala</option>
                                        <option value="Puttalam">Puttalam</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                        <option value="Polonnaruwa">Polonnaruwa</option>
                                        <option value="Badulla">Badulla</option>
                                        <option value="Moneragala">Moneragala</option>
                                        <option value="Ratnapura">Ratnapura</option>
                                        <option value="Kegalle">Kegalle</option>
                                    </select>

                                    <br />

                                    <select name="userType" class="form-control"
                                        onChange={handleOnChange} disabled>
                                        <option value={inputs.userType} defaultChecked={true}> {inputs.userType} </option>
                                        <option value="admin">Admin</option>
                                        <option value="pharmacist">Pharmacist</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="patient">Patient</option>
                                    </select>

                                    <br />
                                </div>

                                <div className="col-6">
                                    <div class="profile-pic-wrapper" style={{ marginTop: "200px" }}>
                                        <input type="file" id="myfile" name="myfile" style={{ opacity: "0", zIndex: 2, marginBottom: "-170px", marginLeft: "100px" }} onChange={handleOnChange} />
                                        <div class="pic-holder">

                                            <img id="blah" class="pic" src={val} />

                                            {/* <Input class="uploadProfileInput" type="file" name="profile_pic" id="newProfilePhoto" accept="image/*" style="opacity: 0;" /> */}
                                            <label for="newProfilePhoto" class="upload-file-block">
                                                <div class="text-center">
                                                    <div class="mb-2">
                                                        <i class="fa fa-camera fa-2x"></i>
                                                    </div>
                                                    <div class="text-uppercase">
                                                        Update <br /> Profile Photo
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                        <hr />

                                    </div>


                                </div>
                            </div>


                            <hr />
                            <div class="row justify-content-md-center">
                                <div class="col-3">
                                    < a href='#'> <input className='btn btn-secondary btn-user btn-block' value=" Cancel" />
                                    </a>
                                </div>
                                <div class="col-3">
                                    <input type="submit" className='btn btn-primary btn-user btn-block' value="Save Details" />

                                </div>
                            </div>

                        </form>

                    </div>

                </div >

            </div >
        </div >
    )
}
