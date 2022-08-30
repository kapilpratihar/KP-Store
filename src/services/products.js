import axios from '../config/axios.config';
import { API_ENDPOINTS } from './api';

export const getAllProducts = async () => {
  const response = await axios.get(API_ENDPOINTS.GET_PRODUCTS);
  return response.data;
};

export const getSpecificProduct = async (id) => {
  const response = await axios.get(`${API_ENDPOINTS.GET_SINGLE_PRODUCT}/${id}`);
  return response.data;
};
