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

export default {addStock, getStocks, getStock, updateStock, deleteStock, checkMedicine, addPrescription};