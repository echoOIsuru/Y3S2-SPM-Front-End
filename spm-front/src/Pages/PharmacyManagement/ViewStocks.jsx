import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import PharmacyManagement from '../../Axios/PharmacyManagement';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function ViewStocks() {

    const [stocks, setStocks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        PharmacyManagement.getStocks()
            .then(res => {
                setStocks(res.data)
            })

    }, [])

    const editing = (id) => {
        console.log("---------------");
        console.log(id);
        console.log("---------------");
        sessionStorage.setItem('EDIT_ID', id);
        navigate('/pharmacy/update_stock');
    }

    // const deleting = (id) => {
    //     console.log(";;;;;;;;;;;;;;;");
    //     console.log(id);
    //     console.log(";;;;;;;;;;;;;;;");
    // }

    const GetActionFormat = (cell, row) => {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary btn-sm ts-buttom" size="sm" onClick={() => editing(row._id)} >
                    <PencilSquare />
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm ml-2 ts-buttom" size="sm" onClick={() => deleting(row._id)} >
                    <TrashFill />
                </button>
            </div>
        );
    }

    const columns = [
        // { dataField: '_id', text: 'Id', sort: true },
        { dataField: 'medicine', text: 'Medicine', sort: true },
        { dataField: 'added_date', text: 'Added Date', sort: true },
        { dataField: 'expire_date', text: 'Expire Date', sort: true },
        { dataField: 'price_per_one', text: 'Price(per 1)', sort: true },
        { dataField: 'quantity', text: 'Quantity', sort: true },
        { dataField: 'total_cost', text: 'Total Cost', sort: true },
        {
            dataField: "action",
            text: "Actions",
            formatter: GetActionFormat
        }
    ];

    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    const { SearchBar, ClearSearchButton } = Search;

    /**
     * Confirmation for delete
     */
    const deleting = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this medicine',
            buttons: [
                {
                    label: 'No',
                    onClick: () => navigate('/pharmacy/view_stocks')
                },
                {
                    label: 'Yes',
                    onClick: () => PharmacyManagement.deleteStock(id)
                                    .then(res => {
                                        window.location.reload();
                                        window.alert("Record was deleted !");
                                        navigate('/pharmacy/view_stocks')
                                    })
                }
            ]
        });
    };

    const cancel = () => {
        navigate('/pharmacy/pharmacy_dashboard');
    }


    return (
        <div>
            <div className="container">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <span></span>
                    <h1 class="h3 mb-0 text-gray-800">MEDICINE STOCKS</h1>
                    <span></span>
                </div>
                <hr class="sidebar-divider" />
                <div className="row">
                    <div className="card shadow col-md-10 offset-md-1 offset-md-1">
                        <br />
                        <div className="card-body">
                            <form className='mx-auto'>
                                <ToolkitProvider
                                    bootstrap4
                                    keyField='_id'
                                    data={stocks}
                                    columns={columns}
                                    search
                                >
                                    {
                                        props => (
                                            <div>
                                                <div className="offset-md-8">
                                                    <SearchBar {...props.searchProps} />
                                                    <ClearSearchButton {...props.searchProps} />
                                                </div>

                                                <hr />
                                                <BootstrapTable
                                                    defaultSorted={defaultSorted}
                                                    pagination={pagination}
                                                    {...props.baseProps}
                                                    hover
                                                    bordered={false}
                                                />
                                            </div>
                                        )
                                    }

                                </ToolkitProvider>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <input type="button" value="Cancel"  onClick={cancel} className="btn btn-secondary offset-md-10" />
            <br /><br />
        </div>
    )
}
