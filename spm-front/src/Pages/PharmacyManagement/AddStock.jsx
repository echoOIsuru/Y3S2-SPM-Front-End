import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PharmacyManagement from '../../Axios/PharmacyManagement';

export default function AddStock() {

    const [inputs, setInputs] = useState({});
    const [total_cost, setTotal] = useState();
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const [flag, setFlag] = useState(false);

    const current = new Date();
    const added_date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;

    const navigate = useNavigate();

    const calculateTotal = () => {
        if (qty != null || price != null){
            setTotal(qty*price);
            setInputs(qty*price);  
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        PharmacyManagement.addStock(inputs)
            .then((data) => {
                navigate('/pharmacy/view_stocks');
            })

    }

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br />
                        <h1 className="text-center">ADD STOCK</h1>
                        <div className="card-body">
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col'>

                                        <div className="form-group">
                                            <label htmlFor="">Medicine</label>
                                            <input type="text" name="medicine" value={inputs.medicine} onChange={(e) => {setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} id="" className="form-control" placeholder='Amoxcillin' required />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Quantity</label>
                                            <input type="number" name="quantity" value={inputs.quantity} onChange={(e) => {setQty(e.target.value); setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} id="" className="form-control" placeholder='0' required />
                                            <input type="hidden" onChange={calculateTotal} />                                            
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Price Per One (Rs)</label>
                                            <input type="number" name="price_per_one" value={inputs.price_per_one} onChange={(e) => {setPrice(e.target.value); setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} id="" className="form-control" placeholder='0' required />
                                            <input type="hidden" onChange={calculateTotal} />
                                        </div>
                                        <br />

                                        <div>
                                            <label htmlFor="">Expiration Date</label>
                                            <input type="date" name="expire_date" value={inputs.expire_date} onChange={(e) => {setInputs(values => ({ ...values, "added_date": added_date})); setInputs(values => ({ ...values, "total_cost": qty*price})); setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} id="" className="form-control" placeholder='2022-09-30' required />
                                        </div>
                                        <br />
                                    </div>

                                    <div className='col my-auto mx-auto'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='card bg-light text-center'>
                                                    <div className='card-body'>
                                                        <h6>TOTAL COST</h6>
                                                        {/* <input type="button" name="total_cost" value={qty*price} onChange={(e) => {setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} /> */}
                                                        <label htmlFor="">Rs. {qty*price} /=</label>
                                                        {/* <input type="hidden" onChange={(e) => {setFlag(true)}} /> */}
                                                        {/* <input type="hidden" name="total_cost" value={inputs.total_cost==qty*price} onChange={(e) => {setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} /> */}
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
            <br />

        </div>
    )
}


{/* <input type="number" name="price_per_one" onChange={(e) => {setPrice(e.target.value); handleChange(e)}} id="" className="form-control" required /> */}
