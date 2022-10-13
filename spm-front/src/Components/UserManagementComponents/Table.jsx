import React, { useMemo, useState, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import {
    Box, Button,
    IconButton,
    Tooltip, children, MenuItem
} from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import { useEffect } from "react";
import UserManagement from "../../Axios/UserManagement";
function Table() {
    const [data, setData] = useState([])
    const [tableData, setTableData] = useState([]);
    const states = [
        "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale"
        , "Nuwara Eliya", "Galle", "Matara", "Hambantota",
        "Jaffna", "Kilinochchi", "Vavuniya", "Mullaitivu",
        "Batticaloa", "Ampara", "Trincomalee", "Kurunegala",
        "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
        "Moneragala", "Ratnapura", "Kegalle"
    ]
    const [validationErrors, setValidationErrors] = useState({});

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


    const getCommonEditTextFieldProps = useCallback(
        (cell) => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                                ? validateAge(+event.target.value)
                                : validateRequired(event.target.value);
                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },
        [validationErrors],
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: "firstName", //simple recommended way to define a column
                header: "First Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "lastName", //simple recommended way to define a column
                header: "Last Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "email", //simple recommended way to define a column
                header: "Email",
                enableEditing: false, //disable editing on this column
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'email',
                }),

            },
            {
                accessorKey: "address", //simple recommended way to define a column
                header: "Address",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "city", //simple recommended way to define a column
                header: "City",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                muiTableBodyCellEditTextFieldProps: {
                    select: true, //change to select for a dropdown
                    children: states.map((state) => (
                        <MenuItem key={state} value={state}>
                            {state}
                        </MenuItem>
                    )),
                },
            },
            {
                accessorKey: "userType", //simple recommended way to define a column
                header: "User Type",
                enableEditing: false, //disable editing on this column
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props

            },

        ],
        [getCommonEditTextFieldProps],
    );

    //simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example



    const handleSaveRow = async ({ exitEditingMode, row, values }) => {

        if (!Object.keys(validationErrors).length) {
            //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
            tableData[row.index] = values;
            //send/receive api updates here
            setTableData([...tableData]);

            console.log(row.original, "ROW DATA ORIGINAL")

            UserManagement.updateUser(row.original._id, values).then(res => {
                console.log(res.data, "UPDATED VALUE")
            }).catch(e => {
                console.log(e, "error");
            })

            console.log(values, "ROW DATA")
            exitEditingMode(); //required to exit editing mode
        }


    };

    const handleDeleteRow = useCallback(
        (row) => {
            if (!window.confirm(`Are you sure you want to delete ${row.getValue('email')}`)) {
                return;
            }

            UserManagement.deleteUser(row.original._id).then(res => {
                console.log(res.data, 'deleted');
            }).catch(e => {
                console.log(e, "error");
            })

            console.log(row.original, "ROW DATA")
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
const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
const validateAge = (age) => age >= 18 && age <= 50;
export default Table