import axios from "axios";
const URL = "http://localhost:8090/api/v1/";

/**
 * Add new medicine stock
 */
const addStock = (data) => {
    return axios.post(URL + "pm_add_stock", data);
}

/**
 * Retrieve Medicine Stocks Details
 */
const getStocks = () => {
    return axios.get(URL + "pm_get_stocks");
}

/**
 * Retrieve Medicine Stocks Details
 */
 const getStock = (id) => {
    return axios.get(URL + "pm_get_stock/" + id);
}

/**
 * Update Medicine Stock
 */
const updateStock = (id, data) => {
    return axios.put(URL + "pm_update_stock/" + id, data);
}

/**
 * Delete Medicine Stock
 */
const deleteStock = (id) => {
    return axios.delete(URL + "pm_delete_stock/" + id);
}

/**
 * Check medicine is available in the stock
 */
const checkMedicine = (data) => {
    return axios.post(URL + "pm_check_medicine", data);
}

/**
 *  Add prescription
 */
const addPrescription = (data) => {
    return axios.post(URL + "pm_add_prescription", data);
}

/**
 * Get prescriptions
 */
const getPrescriptions = () => {
    return axios.get(URL + "pm_get_prescriptions");
}

/**
 * Get prescription's more details
 */
const getMoreDetails = (id) => {
    return axios.get(URL + "pm_get_more_details/" + id);
}

/**
 * Get total no of prescriptions
 */
const getTotalPrescriptions = () => {
    return axios.get(URL + "pm_get_total_prescriptions");
}

/**
 * Get total income
 */
const getTotalIncome = () => {
    return axios.get(URL + "pm_get_total_income");
}

/**
 * Get total income
 */
 const getTotalUsers = () => {
    return axios.get(URL + "pm_get_total_users");
}

/**
 * Get monthly income
 */
const getMonthlyIncome = () => {
    return axios.get(URL + "pm_get_monthly_income");
}

/**
 * Get medicine stocks(out of stock soon)
 */
const getMedicines = () => {
    return axios.get(URL + "pm_get_medicines");
}

export default {addStock, getStocks, getStock, updateStock, 
    deleteStock, checkMedicine, addPrescription, getPrescriptions, 
    getMoreDetails, getTotalPrescriptions, getTotalIncome, getTotalUsers, 
    getMonthlyIncome, getMedicines};