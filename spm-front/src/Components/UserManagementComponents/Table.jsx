import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

function Table() {

    const columns = useMemo(
        () => [
            {
                accessorKey: "name", //simple recommended way to define a column
                header: "Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },
            {
                accessorFn: (row) => row.age, //alternate way
                id: "age", //id required if you use accessorFn instead of accessorKey
                header: "Age",
                Header: <i style={{ color: "red" }}>Age</i> //optional custom markup
            },
            {
                accessorFn: (row) => row.test1, //alternate way
                id: "test1", //id required if you use accessorFn instead of accessorKey
                header: "Test1",
                Header: <i style={{ color: "red" }}>asdas</i> //optional custom markup
            },
        ],
        []
    );

    //simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
    const data = useMemo(
        () => [
            {
                name: "John",
                age: 30,
                test1: 23
            },
            {
                name: "Sara",
                age: 25,
                test1: 12
            }
        ],
        []
    );

    return <MaterialReactTable columns={columns} data={data} enableEditing={true} />;
}

export default Table