import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateStock() {

    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        navigate('/pharmacy/view_stocks');

    }

    return (
        <div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br />
                        <h1 className="text-center">UPDATE MEDICINE</h1>
                        <div className="card-body">
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col'>

                                    <div className="form-group">
                                            <label htmlFor="">ID</label>
                                            <input type="text" name="id" value={inputs.id || ""} onChange={handleChange} id="" className="form-control" readOnly />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Medicine</label>
                                            <input type="text" name="medicine" value={inputs.medicine || ""} onChange={handleChange} id="" className="form-control" readOnly
                                             />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Quantity</label>
                                            <input type="number" name="quantity" value={inputs.quantity || ""} onChange={handleChange} id="" className="form-control" required />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Price Per One</label>
                                            <input type="number" name="price" value={inputs.price || ""} onChange={handleChange} id="" className="form-control" required />
                                        </div>
                                        <br />

                                        <div>
                                            <label htmlFor="">Expiration Date</label>
                                            <input type="date" name="exp" value={inputs.exp || ""} onChange={handleChange} id="" className="form-control" required />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Added Date</label>
                                            <input type="text" name="added" value={inputs.added || ""} onChange={handleChange} id="" className="form-control" readOnly />
                                        </div>
                                        <br />
                                    </div>

                                    <div className='col my-auto mx-auto'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='card bg-light text-center'>
                                                    <div className='card-body'>
                                                        <h6>TOTAL COST</h6>
                                                        <label htmlFor="">5 000/=</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="form-group">
                                    <div className='row'>
                                        <div className='col'>
                                            <input type="button" value="Cancel" className="btn btn-secondary form-control" />
                                        </div>
                                        <div className='col'>
                                            <input type="submit" value="Save" className="btn btn-success form-control" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
