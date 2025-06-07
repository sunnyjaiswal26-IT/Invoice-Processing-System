import axios from 'axios';


export const saveInvoice = async (payload) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/invoice`, payload);
    return response.data; 
  } catch (error) {
    console.error("Error saving invoice:", error);
    throw error.response?.data || new Error("Error saving invoice");
  }
};

export const getAllInvoice = async () => {
  try {

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/invoice`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error.response?.data || new Error("Error fetching invoices");
  }
};

export const deleteInvoice = async (id) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/invoice/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting invoice:", error);
    throw error.response?.data || new Error("Error deleting invoice");
  }
};
