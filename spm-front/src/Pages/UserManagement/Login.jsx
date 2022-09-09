import React from 'react'

function Login() {
    return (
        <div>
            <body>

                <div class="container">


                    <div class="row justify-content-center">

                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <br />
                            <br />

                            <br />
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">

                                    <div class="row">
                                        <div class="col-lg-6 d-none d-lg-block">
                                            <img width={"110%"} height={"100%"} src="https://media.istockphoto.com/photos/doctor-and-nurse-discussing-patient-case-at-hospital-picture-id1373258972?b=1&k=20&m=1373258972&s=170667a&w=0&h=ZLDjfZOoKyZW11uETxWmQ0cHUlfakaPG7LACavOVo7w=" />
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <br />


                                                <form class="user">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="Enter Email Address" />
                                                    </div>

                                                    <div class="form-group">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Enter Password" />
                                                    </div>
                                                    {/* <div class="form-group">
                                                        <div class="custom-control custom-checkbox small">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                            <label class="custom-control-label" for="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div> */}
                                                    <br />
                                                    <br />
                                                    <a href="index.html" class="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </a>

                                                </form>
                                                <hr />

                                                <div class="text-center">
                                                    <a class="small" href="register.html">Create an Account!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </body>



        </div>



    )
}

export default Login