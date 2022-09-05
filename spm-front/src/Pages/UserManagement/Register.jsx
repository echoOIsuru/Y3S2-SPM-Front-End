import React, { useState } from 'react'
import PasswordStrengthBar from "react-password-strength-bar";

function Register() {

    const [inputs, setInputs] = useState();
    const [password, setPassword] = useState("");


    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == "password")
            setPassword(value)

        setInputs(values => ({ ...values, [name]: value }))
    }

    const createUser = (e) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <div class="container">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">

                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block" style={{
                            background: 'url("https://jamanetwork.com/imagelibrary/CollectionFeaturedImages/JamaNetwork/6258_patient-information.png")',
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user" onSubmit={createUser}>
                                    <input type="text" class="form-control form-control-user" name="firstName"
                                        onChange={handleOnChange}
                                        placeholder="Enter First Name" required />
                                    <br />
                                    <input type="text" class="form-control form-control-user" name="lastName"
                                        onChange={handleOnChange}
                                        placeholder="Enter Last Name" />
                                    <br />
                                    <input type="email" class="form-control form-control-user" name="email"
                                        onChange={handleOnChange}
                                        placeholder="Enter Email Address" />
                                    <br />
                                    <textarea style={{ borderRadius: "25px" }} class="form-control form-control-user" rows="4" cols="50" name="address"
                                        onChange={handleOnChange}
                                        placeholder="Enter Address" />
                                    <br />

                                    <select name="city" class="form-control" style={{ fontSize: " .8rem", borderRadius: "25px", padding: "0.2rem 1rem", height: "48px" }}
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
                                    <div style={{ marginLeft: "100px" }}>
                                        {password != "" && <PasswordStrengthBar
                                            minLength={6}
                                            password={password}
                                            style={{ width: 200, height: 30 }}
                                        />}

                                    </div>

                                    <input type="password" class="form-control form-control-user" name="password"
                                        onChange={handleOnChange}
                                        placeholder="Enter Password" />

                                    <br />
                                    <input type="password" class="form-control form-control-user" name="repeatPassword"
                                        onChange={handleOnChange}
                                        placeholder="Email Repeate Password" />

                                    <br />



                                    <input type="submit" className='btn btn-primary btn-user btn-block' value=" Register Account" />

                                </form>
                                <hr />

                                <div class="text-center">
                                    <a class="small" href="login.html">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Register