import {useEffect, useState} from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditIcon from '@mui/icons-material/Edit';

export default function ListStudent() {
    let [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/students')
          .then(response => {
                setStudents(response.data);
              console.log(students)
            })
          .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Date of Birth</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Classroom</TableCell>
                        <TableCell align="center" colSpan={2}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.dateOfBirth}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.classroom.className}</TableCell>
                            <TableCell align="center">
                                <Grid item xs={8}>
                                    <EditIcon />
                                </Grid>
                            </TableCell>
                            <TableCell align="center">
                                <Grid item xs={8}>
                                    <DeleteTwoToneIcon />
                                </Grid>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );


    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'name', headerName: 'Name', width: 200 },
    //     { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
    //     { field: 'address', headerName: 'Address', width: 150 },
    //     { field: 'email', headerName: 'Email', width: 240 },
    //     { field: 'phone', headerName: 'Phone', width: 180 },
    //     { field: 'classroom', headerName: 'Classroom', width: 160 },
    //     { field: 'action', headerName: 'Action', width: 130 },
    //
    // ];
    //
    // const rows = students.map(student => (
    //     {
    //         id: student.id,
    //         name: student.name,
    //         dateOfBirth: student.dateOfBirth,
    //         address: student.address,
    //         email: student.email,
    //         phone: student.phone,
    //         classroom: student.classroom.className,
    //         // action: (
    //         //     <>
    //         //         <Grid item xs={8}>
    //         //             <DeleteTwoToneIcon />
    //         //         </Grid>
    //         //         {/*<button className="btn btn-primary">Edit</button>*/}
    //         //         {/*<button className="btn btn-danger">Delete</button>*/}
    //         //     </>
    //         // )
    //     }
    // ));
    //
    // return (
    //     <DataGrid
    //         rows={rows}
    //         columns={columns}
    //         initialState={{
    //             pagination: {
    //                 paginationModel: { page: 0, pageSize: 5 },
    //             },
    //         }}
    //         pageSizeOptions={[5, 10]}
    //         checkboxSelection
    //     />
    // )
}