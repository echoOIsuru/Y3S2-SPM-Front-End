import React from 'react'

export default function ViewStocks() {
    return (
        <div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br />
                        <h1 className='text-center'>MEDICINE STOCKS</h1>
                        <div className="card-body">
                            <hr />
                            <form className='mx-auto'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Medicine</th>
                                            <th>Added Date</th>
                                            <th>Quantity</th>
                                            <th>Cost</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>101</td>
                                            <td>Amoxcillin</td>
                                            <td>11 aug 2022</td>
                                            <td>1000</td>
                                            <td>5000 /=</td>
                                            <td>icons</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
