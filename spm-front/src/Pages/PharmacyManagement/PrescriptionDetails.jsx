import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PharmacyManagement from '../../Axios/PharmacyManagement';

export default function PrescriptionDetails() {

  let data_id = sessionStorage.getItem("DATA_ID");

  const navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    PharmacyManagement.getMoreDetails(data_id)
      .then(data => {
        setInfo(data.data[0]);
        setDetails(data.data[0].medicines);
      })
  }, [])

  const cancel = () => {
    navigate('/pharmacy/view_prescriptions');
  }

  return (
    <div>
      <div className="container">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <span></span>
          <h1 class="h3 mb-0 text-gray-800">PRESCRIPTION DETAILS</h1>
          <span></span>
        </div>
        <hr class="sidebar-divider" />
        <div className="row">
          <div className="card shadow col-md-8 mx-auto">
            <br />
            <div className="card-body">
              <form>
                <div className='row'>
                  <div className='col-xl-4'>
                    <div className="form-group">
                      <label htmlFor="">Appointment ID</label>
                      <input type="text" name="id" value={info.id || ""} className="form-control" readOnly />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Patient Name</label>
                      <input type="text" name="name" value={info.name} className="form-control" readOnly />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Date</label>
                      <input type="text" name="date" value={info.added_date} className="form-control" readOnly />
                    </div>
                  </div>
                  {/* <div className='col'></div>
                  <div className='col'></div> */}

                </div>

                <div className='row'>
                  <div className='col-xl-8'>
                    <div className='container'>
                      <div className='card text-center'>
                        <div className='card-body'>
                          <table className='table table-hover table-borderless'>
                            <thead>
                              <tr>
                                <th>Medicine</th>
                                <th>Quantity</th>
                                <th>Price Per 1</th>
                                <th>Total Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {details.map((x, index) => {
                                return (
                                  x &&
                                  <tr key={x._id}>
                                    <td>{x.medicine}</td>
                                    <td>{x.quantity}</td>
                                    <td>{x.price}</td>
                                    <td>{x.total}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='col my-auto mx-auto'>
                    <div className='container'>
                      <div className='row'>
                        <div className='card bg-light text-center'>
                          <div className='card-body'>
                            <h6>TOTAL BILL</h6>
                            <label htmlFor="">Rs. {info.total_bill} /=</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className='text-right'>
                  <input type="button" value="Cancel" onClick={cancel} className="btn btn-secondary" />

                </div>


              </form>


            </div>
          </div>
        </div>
      </div>
      <br />

    </div>)
}
