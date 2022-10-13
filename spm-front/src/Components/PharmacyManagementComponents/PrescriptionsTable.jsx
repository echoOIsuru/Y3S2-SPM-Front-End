import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useNavigate } from 'react-router-dom';

export default function PrescriptionsTable() {

    const navigate = useNavigate();

    const products = [
        { id: '123', name: 'Jeffrey',  added_date: '2022-07-09', total_bill: '1750' },
        { id: '063', name: 'Alvis',  added_date: '2022-03-17', total_bill: '1200' },
        { id: '100', name: 'Lissa',  added_date: '2022-05-10', total_bill: '1600' },
        { id: '111', name: 'Marcos',  added_date: '2022-04-21', total_bill: '2150' },
    ];

    const moreDetails = () => {
        navigate('/pharmacy/more_details');
    }

    const GetActionFormat = (cell, row) => {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary btn-sm ts-buttom" size="sm" onClick={() => moreDetails()} >
                    Details
                </button>
            </div>
        );
    }

    const columns = [
        { dataField: 'id', text: 'Patient ID', sort: true },
        { dataField: 'name', text: 'Patient Name', sort: true },
        // { dataField: 'lastName', text: 'Last Name', sort: true },
        { dataField: 'added_date', text: 'Date', sort: true },
        { dataField: 'total_bill', text: 'Total Bill', sort: true },
        { dataField: 'action', text: 'Action',  formatter: GetActionFormat }
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

    return (
        <div>

            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={products}
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
        </div>
    )
}
