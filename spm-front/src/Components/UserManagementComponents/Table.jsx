import React, { useMemo, useState, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import {
    Box, Button,
    IconButton,
    Tooltip,
} from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import { useEffect } from "react";
import UserManagement from "../../Axios/UserManagement";
function Table() {
    const [data, setData] = useState([])
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        let temp = []
        UserManagement.getAllUsers().then(res => {
            // (res.data).forEach(element => {
            //     let tempObj = {
            //         firstName: element.firstName,
            //         lastName: element.lastName,
            //         email: element.email,
            //         address: element.address,
            //         city: element.city,
            //         userType: element.userType
            //     }
            //     temp.push(tempObj)
            // });

            setData(res.data)
            setTableData(res.data)
            console.log(temp, "gg")
        })
    }, [])

    const columns = useMemo(
        () => [
            {
                accessorKey: "firstName", //simple recommended way to define a column
                header: "First Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },
            {
                accessorKey: "lastName", //simple recommended way to define a column
                header: "Last Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },
            {
                accessorKey: "email", //simple recommended way to define a column
                header: "Email",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },
            {
                accessorKey: "address", //simple recommended way to define a column
                header: "Address",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },
            {
                accessorKey: "city", //simple recommended way to define a column
                header: "City",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },
            {
                accessorKey: "userType", //simple recommended way to define a column
                header: "User Type",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },

        ],
        []
    );

    //simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example



    const handleSaveRow = async ({ exitEditingMode, row, values }) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
        tableData[row.index] = values;
        //send/receive api updates here
        setTableData([...tableData]);

        console.log("sadasdasd")
        exitEditingMode(); //required to exit editing mode
    };

    const handleDeleteRow = useCallback(
        (row) => {
            if (
                !window.confirm(`Are you sure you want to delete ${row.getValue('email')}`)
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData],
    );

    return (
        <>
            <MaterialReactTable columns={columns} data={tableData}
                enableEditing={true}
                onEditingRowSave={handleSaveRow}
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton onClick={() => table.setEditingRow(row)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="right" title="Delete">
                            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            // enableRowActions
            // renderRowActions={({ row }) => (
            //     <div>
            //         <button onClick={() => console.log(row._valuesCache
            //         )}>Action 1</button>
            //         <button>Action 2</button>
            //         <button>Action 3</button>
            //     </div>
            // )}
            />
        </>
    )
}

export default Table