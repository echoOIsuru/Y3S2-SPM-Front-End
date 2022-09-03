import React, { useState } from 'react'
import { Row, Col, Button } from "react-bootstrap";

const NewMedicines = ({ setOpen, Medications, setMedications }) => {

    const [Medicines, setMedicines] = useState("");
    const [Quantity, setQunatity] = useState("");
    const [MedicinesList, setMedicinesList] = useState([]);

    // const fetchData = useCallback(async () => {
    //     try {
    //         ServiceManagement.getAppointmentsByDocId().then(res => {
    //             setMedicinesList(res.data)
    //         })
    //     } catch (error) {
    //         alert(error);
    //     }
    // }, [])

    // useEffect(() => {
    //     fetchData()
    // }, [fetchData])

    const AddNewMedication = () => {

        if (Medications != '') {
            setMedications(Medications+', ' + Medicines + '(' + Quantity + ')');
        }
        else{
            setMedications(Medicines + '(' + Quantity + ')');   
        }
        handleClose();
    }

    const handleClose = () => setOpen(false);

    // let MedList = MedicinesList.length > 0
    // && MedicinesList.map((item) => {
    //     return (
    //         // <option value={item.illness}>{item.illness}</option>
    //     )
    // });

    return (
        <div>
            <br />

            <Row>
                <Col>
                    <label style={{ marginBottom: '10px' }}>Medicines:</label><br />
                    <select style={{ width: '270px' }} type="text" className="form-select" value={Medicines} onChange={(e) => {
                        setMedicines(e.target.value);
                    }} required >
                        <option value=""></option>
                        <option value="Accepted">Aspirin</option>
                        <option value="Canceled">Fludrocortisone</option>
                        <option value="Pending">Advil</option>
                    </select>
                </Col>

            </Row>< br />< br />

            <Row>
                <Col>
                    <label style={{ marginBottom: '10px' }}>Quantity: </label><br />
                    <input className="form-control" style={{ width: '270px' }} type="text" value={Quantity} onChange={(e) => {
                        setQunatity(e.target.value);
                    }} required/>
                </Col>

            </Row>< br />< br />

            <Button type='submit' style={{ float: "left", marginLeft: "1px", width: '90px' }} variant="info" onClick={() => {
                AddNewMedication()
            }} >
                Save
            </Button> &nbsp;

            <Button style={{ float: "left", marginLeft: "10px" }} variant="outline-secondary" onClick={() => {
                handleClose();
            }}>Cancel</Button>

        </div>
    )
}

export default NewMedicines;
