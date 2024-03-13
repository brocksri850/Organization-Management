import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (userData) => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.post(`${API_BASE_URL}/users/signup`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOrganizationAndUserData = async () => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateUser = async (id, userData) => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getUserById = async (id) => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
