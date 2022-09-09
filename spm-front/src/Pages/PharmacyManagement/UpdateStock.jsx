import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PharmacyManagement from '../../Axios/PharmacyManagement';

export default function UpdateStock() {

    const [inputs, setInputs] = useState({});
    const [total_cost, setTotal] = useState();
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    const current = new Date();
    const added_date = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;

    const navigate = useNavigate();
    let edit_id = sessionStorage.getItem("EDIT_ID");
    // console.log(edit_id);

    useEffect(() => {
        PharmacyManagement.getStock(edit_id)
            .then((data) => {
                setInputs(data.data[0]);
                // console.log(data.data[0]);
            })
    }, [])


    const calculateTotal = () => {
        if (qty != null || price != null) {
            setTotal(qty * price);
            setInputs(qty * price);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        inputs.added_date = added_date;
        inputs.total_cost = inputs.quantity * inputs.price_per_one;

        console.log(inputs);

        PharmacyManagement.updateStock(edit_id, inputs)
            .then((data) => {
                navigate('/pharmacy/view_stocks');
            })

    }

    const cancel = () => {
        navigate('/pharmacy/view_stocks');
    }

    return (
        <div>
            <div className="container">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <span></span>
                    <h1 class="h3 mb-0 text-gray-800">UPDATE MEDICINE</h1>
                    <span></span>
                </div>
                <hr class="sidebar-divider" />
                <div className="row">
                    <div className="card shadow col-md-6 offset-md-3 offset-md-3">
                        <br />
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col'>

                                        <div className="form-group">
                                            <label htmlFor="">ID</label>
                                            <input type="text" name="id" value={inputs._id || ""} className="form-control" readOnly />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Medicine</label>
                                            <input type="text" name="medicine" value={inputs.medicine} className="form-control" placeholder='Amoxcillin' readOnly />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Quantity</label>
                                            <input type="number" name="quantity" value={inputs.quantity} onChange={(e) => { setQty(e.target.value); setInputs(values => ({ ...values, [e.target.name]: e.target.value })) }} className="form-control" placeholder='0' required />
                                            <input type="hidden" onChange={calculateTotal} />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Price Per One (Rs)</label>
                                            <input type="number" name="price_per_one" value={inputs.price_per_one}
                                                onChange={
                                                    (e) => {
                                                        setPrice(e.target.value);
                                                        setInputs(values => ({ ...values, [e.target.name]: e.target.value }))
                                                    }
                                                }
                                                className="form-control" placeholder='0' required />
                                            <input type="hidden" onChange={calculateTotal} />
                                        </div>
                                        <br />

                                        <div>
                                            <label htmlFor="">Expiration Date</label>
                                            <input type="date" name="expire_date" value={inputs.expire_date}
                                                onChange={(e) => {

                                                    setInputs(values => ({ ...values, [e.target.name]: e.target.value }))
                                                }}
                                                className="form-control" placeholder='2022-09-30' required />
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label htmlFor="">Added Date</label>
                                            <input type="text" name="added" value={inputs.added_date || ""} className="form-control" readOnly />
                                        </div>
                                    </div>

                                    <div className='col my-auto mx-auto'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='card bg-light text-center'>
                                                    <div className='card-body'>
                                                        <h6>TOTAL COST</h6>
                                                        {/* <input type="button" name="total_cost" value={qty*price} onChange={(e) => {setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} /> */}
                                                        <label htmlFor="">Rs. {inputs.quantity * inputs.price_per_one || qty * price} /=</label>
                                                        {/* <input type="hidden" onChange={() => setInputs(values => ({ ...values, "total_cost": inputs.quantity*inputs.price_per_one }))} /> */}
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
                                            <input type="button" value="Cancel" onClick={cancel} className="btn btn-secondary form-control" />
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
