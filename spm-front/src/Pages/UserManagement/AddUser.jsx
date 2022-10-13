import React, { useState } from 'react'
import Table from '../../Components/UserManagementComponents/Table'
import { useNavigate } from 'react-router-dom';
import UserManagement from '../../Axios/UserManagement';

export default function AddUser() {

    const [inputs, setInputs] = useState();
    const [password, setPassword] = useState("");
    const navigation = useNavigate();
    const [specFlag, setSpecFlag] = useState(false);

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == "password")
            setPassword(value)
        if (name == 'userType' && value == 'doctor') {
            setSpecFlag(true)
        } else if (name == 'userType' && value !== 'doctor') {
            setSpecFlag(false)
        }

        setInputs(values => ({ ...values, [name]: value }))
    }


    const validPassword = () => {
        if (inputs.password !== inputs.repeatPassword) {
            window.alert(`password and repeate password mismatched!`)
            return true;
        }

        return false
    }

    const createUser = (e) => {
        e.preventDefault()

        let temp = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            address: inputs.address,
            city: inputs.city,
            password: inputs.password,
            userType: inputs.userType,
            specialization: inputs.specialization ? inputs.specialization : "0"

        }

        if (!validPassword()) {

            console.log(temp, "USER DATA")
            UserManagement.addNewUser(temp).then(res => {
                console.log(res.data)
                window.alert(`User ${temp.firstName} created successfully!`)
                //navigation('/')
            })

        }
    }

    return (
        <div className='container'>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">ADD NEW USER</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            <div class="row justify-content-md-center">
                <div className="col-6" style={{ backgroundColor: "white", padding: "20px", marginBottom: "20px" }}>
                    <form onSubmit={createUser} class="" >
                        <input type="text" class="form-control " name="firstName"
                            onChange={handleOnChange}
                            placeholder="Enter First Name" required />
                        <br />
                        <input type="text" class="form-control" name="lastName"
                            onChange={handleOnChange}
                            placeholder="Enter Last Name"
                            required />
                        <br />
                        <input type="email" class="form-control " name="email"
                            onChange={handleOnChange}
                            placeholder="Enter Email Address"
                            required />
                        <br />
                        <textarea class="form-control " rows="4" cols="50" name="address"
                            onChange={handleOnChange}
                            placeholder="Enter Address"
                            required />
                        <br />

                        <select name="city" class="form-control"
                            onChange={handleOnChange} required>
                            <option value="" defaultChecked={true}>Select City</option>
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
                            onChange={handleOnChange} required>
                            <option value="" defaultChecked={true}>Select User Type</option>
                            <option value="admin">Admin</option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>

                        <br />
                        {
                            specFlag &&
                            <>
                                <select name="specialization" class="form-control"
                                    onChange={handleOnChange} required>
                                    <option value="" defaultChecked={true}>Select Doctor Specialization</option>
                                    <option value="Anesthesiology">Anesthesiology</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Family Medicine">Family Medicine</option>
                                </select>
                                <br />
                            </>
                        }



                        <center>
                            <lable>Create temporary password for new users</lable>
                        </center>
                        <br />
                        <input type="password" class="form-control" name="password"
                            pattern=".{6,}"
                            title="Six or more characters"
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            required />

                        <br />
                        <input type="password" class="form-control" name="repeatPassword"
                            onChange={handleOnChange}
                            placeholder="Enter Repeate Password"
                            required />

                        <br />

                        <hr />
                        <div class="row">
                            <div class="col">
                                < a href='/dashboard'> <input className='btn btn-secondary btn-user btn-block' value=" Cancel" />
                                </a>
                            </div>
                            <div class="col">
                                <input type="submit" className='btn btn-primary btn-user btn-block' value=" Add User" />

                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}
