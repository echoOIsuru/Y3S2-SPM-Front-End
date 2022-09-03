import axios from "axios";
const URL = 'http://localhost:8090/api/v1/';

// get appointments by logged doctor
const getAppointmentsByDocId = (id) => {
    return axios.get(URL + "appointmentsByDocId/" + id);
}

// get appointment record details
const getAppointmentById = (id) => {
    return axios.get(URL + "appointmentRecord/" + id);
}

// get appointment record details
const getMedicationById = (id) => {
    return axios.get(URL + "medicationByPatientID/" + id);
}

//insert data to cured table
const insertCuredPatient = (data) => {
    return axios.post(URL + "curedPatient/", data);
}

// update medical details by record id
const updateMedicationRecordById = (id, data) => {
    return axios.put(URL + "patientMedication/" + id, data);
}

// delete cured details of patient illness
const deleteCuredDetails = (id) => {
    return axios.delete(URL + "curedPatient/" + id);
}

// delete medical record
const deleteMedicalRecord = (id) => {
    return axios.delete(URL + "patientMedication/" + id);
}

// update cured patient illness
const updatecuredPatient = (id, data) => {
    return axios.put(URL + "curedPatient/" + id, data);
}

// get medical details by record id
const getMedicationRecordById = (id) => {
    return axios.get(URL + "patientMedication/" + id);
}

// get cured patients by doctor id
const getCuredPatients = () => {
    return axios.get(URL + "curedPatients/");
}


export default {getAppointmentsByDocId,getAppointmentById,getMedicationById, getMedicationRecordById, updatecuredPatient, deleteMedicalRecord, deleteCuredDetails, updateMedicationRecordById, getCuredPatients, insertCuredPatient};