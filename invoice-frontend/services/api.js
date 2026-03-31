import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getInvoices = () => API.get("invoices/");
export const getInvoice = (id) => API.get(`invoices/${id}/`);
export const createInvoice = (data) => API.post("invoices/", data);