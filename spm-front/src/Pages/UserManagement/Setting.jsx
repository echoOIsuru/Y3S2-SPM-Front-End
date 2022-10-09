import React, { useState } from 'react'
import PasswordStrengthBar from "react-password-strength-bar";
import { useNavigate } from 'react-router-dom';
import UserManagement from '../../Axios/UserManagement';

export const Setting = () => {
    const [inputs, setInputs] = useState();
    const [password, setPassword] = useState("");


    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == "password")
            setPassword(value)

        setInputs(values => ({ ...values, [name]: value }))
    }


    const validPassword = () => {
        if (inputs.password !== inputs.repeatPassword) {
            window.alert(`password and repeate password mismatched!`)
            return true;
        }

        return false
    }

    const updatePassword = (e) => {
        e.preventDefault()

        let temp = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            address: inputs.address,
            city: inputs.city,
            password: inputs.password,
            userType: "patient",
            specialization: "0"

        }

        if (!validPassword()) {
            let data = JSON.parse(sessionStorage.getItem("userLoginStorage"))


            UserManagement.loginUser({ _id: data._id, password: inputs.old_password }).then(res => {
                if (res.data == []) {
                    window.alert(`Wrong Password!`)
                } else {
                    console.log(res.data)
                    UserManagement.updateUser(data._id, { password: inputs.password }).then(result => {
                        console.log(result.data, "updated pass")
                        window.alert(`Password Updated!`)
                    }).catch(err => {
                        console.log(err)
                    })
                    //sessionStorage.setItem("userLoginStorage", JSON.stringify(res.data));
                    //navigation('/dashboard')

                }
            })
            // UserManagement.addNewUser(temp).then(res => {
            //     console.log(res.data)
            //     window.alert(`User ${temp.firstName} created successfully!`)
            //     // navigation('/')
            // })

        }
    }

    return (
        <div className='container'>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">SETTINGS</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            <div class="row">
                <div class="row justify-content-md-center" style={{ marginBottom: "140px" }}>
                    <div className="col-6" style={{ backgroundColor: "white", padding: "50px 80px 80px 80px" }}>
                        <h5 className='text-center text-gray-800'>RESET PASSWORD</h5>
                        <br />
                        <form onSubmit={updatePassword} class="" >



                            <input type="password" class="form-control form-control-user" name="old_password"
                                pattern=".{6,}"
                                title="Six or more characters"
                                onChange={handleOnChange}
                                placeholder="Enter Old Password"
                                required />

                            <br />
                            <center>

                                <div>
                                    {password != "" && <PasswordStrengthBar
                                        minLength={6}
                                        password={password}
                                        style={{ width: 200, height: 30 }}
                                    />}

                                </div>
                            </center>
                            <input type="password" class="form-control form-control-user" name="password"
                                pattern=".{6,}"
                                title="Six or more characters"
                                onChange={handleOnChange}
                                placeholder="Enter Password"
                                required />

                            <br />
                            <input type="password" class="form-control form-control-user" name="repeatPassword"
                                onChange={handleOnChange}
                                placeholder="Enter Repeate Password"
                                required />

                            <br />



                            <input type="submit" className='btn btn-primary btn-user btn-block' value="Reset Password" />

                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}
