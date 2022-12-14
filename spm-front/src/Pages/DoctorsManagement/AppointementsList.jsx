import React, { useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeProvider, Container, Table, Row, Col, Button } from "react-bootstrap";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './Pagination';
import "./admin.css";
import moment from 'moment'
import ServiceManagement from '../../Axios/DoctorsManagement'
// import NavigationBar from './NavigationBar';
// import TopNavigation from './TopNavigation';

const AppointementsList = () => {

    const [OngoingAppointments, setOngoingAppointments] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [indexOfFirstItem, setindexOfFirstItem] = useState(0);
    const [indexOfLastItem, setindexOfLastItem] = useState(3);
    const [recordsPerPage] = useState(3);
    const [retrievedData, setretrievedData] = useState([])

    let today = new Date().toLocaleDateString();
    let navigate = useNavigate();

    //fetch details of allocated panels
    const fetchData = useCallback(async () => {
        try {
            let data = JSON.parse(sessionStorage.getItem("userLoginStorage"))
            ServiceManagement.getAppointmentsByDocId(data.email).then(res => {
                console.log(res.data)
                setOngoingAppointments(res.data)
                setretrievedData(res.data)
            })
        } catch (error) {
            alert(error);
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    //date conversion
    function convertDates(date) {
        if (!date) {
            return '';
        }
        else {
            return moment(date).format('DD/MM/YYYY');
        }
    }


    //slice retrieved data for the pagination
    const SlicedOngoingAppointments = OngoingAppointments.slice(indexOfFirstItem, indexOfLastItem);

    //filter data
    const filterData = (obj, key) => {

        const results = obj.filter(o =>
            Object.keys(o).some(k => o[k].toString().toLowerCase().includes(key.toLowerCase())));

        setOngoingAppointments(results);

    }

    const handleSearch = (e) => {

        const k = e.target.value.toLowerCase()

        filterData(retrievedData, k);


    }

    function handleHidden(value) {
        if (value == 'Accepted') {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        // <Row>
        //     <Col xs={'auto'}>
        //         <NavigationBar />
        //     </Col>
        //     <Col>
        <ThemeProvider breakpoints={['xxxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>

            <Container><br /><br />

                <center>
                    <h2 style={{ fontWeight: '700' }}>PATIENTS APPOINTMENTS HISTORY</h2>
                </center><br /><br />

                <div class="fontuser" style={{ float: 'right' }}>

                    <input className='main-search' placeholder="Search" type="text" name="search" style={{ width: '400px', height: '40px', marginLeft: '100px' }} onChange={(e) => {
                        handleSearch(e);
                    }} />
                    <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>


                </div><br /><br />


                <Row style={{ marginTop: '50px' }} className='body-content'>
                    {SlicedOngoingAppointments.length > 0 ?
                        <Table responsive hover>

                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Appointment Date</th>
                                    <th>Appointment Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    SlicedOngoingAppointments && SlicedOngoingAppointments.map((appoint) => (
                                        <tr>
                                            <td>{appoint.patientName}</td>
                                            <td>{appoint.date}</td>
                                            <td>{appoint.time}</td>
                                            <td>{appoint.status}</td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </Table>
                        : <span style={{ display: 'flex', justifyContent: 'center' }}>
                            Appointments Unavailable !
                        </span>
                    }
                    <Pagination
                        itemsCount={SlicedOngoingAppointments.length}
                        itemsPerPage={recordsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setindexOfLastItem={setindexOfLastItem}
                        setindexOfFirstItem={setindexOfFirstItem}
                        alwaysShown={false}
                    />
                </Row>
            </Container>
        </ThemeProvider >
        //     </Col>
        // </Row>
    )
}

export default AppointementsList;

