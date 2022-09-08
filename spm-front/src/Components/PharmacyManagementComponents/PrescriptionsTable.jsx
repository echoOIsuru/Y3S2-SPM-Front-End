import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

export default function PrescriptionsTable() {

    const products = [
        { id: '123', firstName: 'Jeffrey', lastName: 'George', added_date: '2022-07-09', total_bill: '1750' },
        { id: '063', firstName: 'Alvis', lastName: 'Daen', added_date: '2022-03-17', total_bill: '1200' },
        { id: '100', firstName: 'Lissa', lastName: 'Shipsey', added_date: '2022-05-10', total_bill: '1600' },
        { id: '111', firstName: 'Marcos', lastName: 'Anguiano', added_date: '2022-04-21', total_bill: '2150' },
    ];

    const columns = [
        { dataField: 'id', text: 'User ID', sort: true },
        { dataField: 'firstName', text: 'First Name', sort: true },
        { dataField: 'lastName', text: 'Last Name', sort: true },
        { dataField: 'added_date', text: 'Date', sort: true },
        { dataField: 'total_bill', text: 'Total Bill', sort: true }
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
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}
