import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusSquareFill, XSquareFill } from 'react-bootstrap-icons';
import PharmacyManagement from '../../Axios/PharmacyManagement';

export default function AddPrescription() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [inputList, setInputList] = useState([{ medicine: "", quantity: "",  total: "", price: "" }]);
    const [subTotal, setSubTotal] = useState(0);

    const current = new Date();
    const added_date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.total_bill = subTotal;
        inputs.added_date = added_date;
        inputs.data = inputList;

        PharmacyManagement.addPrescription(inputs)
            .then((data) => {
                navigate('/pharmacy/view_prescriptions');
            });
    }

    const cancel = () => {
        navigate('/pharmacy/pharmacy_dashboard');
    }

    /**
     * For dynamically adding input fields
     */

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);

        // console.log(list);
        if (list[list.length - 1].quantity && list[list.length - 1].medicine) {
            PharmacyManagement.checkMedicine(list[list.length - 1])
                .then((data) => {
                    if (data.data.length == 0) {
                        window.alert("Medicine that you entered is not avalable in the stock");
                        handleRemoveClick(index);
                    } else {
                        // console.log(data.data[0]);

                        inputList[index].total = list[list.length - 1].quantity * data.data[0].price_per_one;
                        inputList[index].price = data.data[0].price_per_one;

                        let arr = [];
                        inputList.map((x, i) => {
                            arr.push(x.total);
                        });
            
                        let sum = 0;
                        for(const value of arr){
                            sum += value;
                        }
                        setSubTotal(sum);

                    }
                })
        }

    };

    const getPrice = index => {
        if(inputList.length == 0){
            return(0);
        }else{
            return(inputList[index].price);
        }    
    };

    const getTotal = index => {
        if(inputList.length == 0){
            return(0);
        }else{
            return(inputList[index].total);
        }
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {

        setInputList([...inputList, { medicine: "", quantity: "",  total: "", price: ""  }]);
    };

    return (
        <div>
            <div className="container">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <span></span>
                    <h1 class="h3 mb-0 text-gray-800">ADD PRESCRIPTION</h1>
                    <span></span>
                </div>
                <hr class="sidebar-divider" />
                <div className="row">
                    <div className="card shadow col-md-9 mx-auto">
                        <br />
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    {/* <div className='col-xl-8'> */}

                                        <div className="form-group">
                                            <label htmlFor="">Patient's appointment ID</label>
                                            <input type="text" name="id" value={inputs.id} onChange={(e) => { setInputs(values => ({ ...values, [e.target.name]: e.target.value })) }} className="form-control" required />
                                        </div>
                                        <br />

                                        {/* For dynamically adding input fields */}

                                        <div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlFor="">Medicine Type</label>
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="">Quantity (tablets/bottels)</label>
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="">Price Per One</label>
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="">Total Cost</label>
                                                </div>
                                            </div>

                                            {inputList.map((x, i) => {
                                                return (
                                                    <div>
                                                        <div className='row'>
                                                            <div className='col'>
                                                                <input
                                                                    name="medicine"
                                                                    placeholder="Enter Medicine"
                                                                    value={x.medicine}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                    required
                                                                />
                                                            </div>

                                                            <div className='col'>
                                                                <input
                                                                    type="number"
                                                                    name="quantity"
                                                                    placeholder="Enter quantity"
                                                                    value={x.quantity}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                    required
                                                                />
                                                            </div>

                                                            <div className='col'>
                                                                <input
                                                                    type="text"
                                                                    name="price"
                                                                    value={getPrice(i)}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                    readOnly
                                                                />
                                                            </div>

                                                            <div className='col'>
                                                                <input
                                                                    type="text"
                                                                    name="total"
                                                                    value={getTotal(i)}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>



                                                        <div className="btn-box">
                                                            {inputList.length !== 1 && <button
                                                                type='button'
                                                                className="btn-outline-danger"
                                                                onClick={() => handleRemoveClick(i)}><XSquareFill /></button>}
                                                            {inputList.length - 1 === i && <button type='button' className="btn-outline-success" onClick={handleAddClick}><PlusSquareFill /></button>}
                                                        </div>
                                                        <br />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    {/* </div> */}

                                    {/* <div className='col my-auto mx-auto'> */}
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='card bg-light text-center'>
                                                    <div className='card-body'>
                                                        <h6>TOTAL BILL</h6>
                                                        {/* <input type="button" name="total_cost" value={qty*price} onChange={(e) => {setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} /> */}
                                                        <label htmlFor="">{subTotal} /=</label>
                                                        {/* <input type="hidden" onChange={(e) => {setFlag(true)}} /> */}
                                                        {/* <input type="hidden" name="total_cost" value={inputs.total_cost==qty*price} onChange={(e) => {setInputs(values => ({ ...values, [e.target.name]: e.target.value }))}} /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/* </div> */}
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
