import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

// Login Route api Fetch

const Login = (email, password) => {
  const response = api.post('/api/user/login', { email, password });

  return response;
};

// Register Route Api Fetch

const RegisterRoute = (name, email, password) => {
  const response = api.post('http://localhost:4000/api/user/create-user', {
    name,
    email,
    password,
  });

  return response;
};

// GET Customer Data

const GetCustomerData = () => {
  const response = api.get('/api/user/dashboard');

  return response;
};

// Logout User

const Logout = () => {
  return api.get('/api/user/logout');
};

// Forgot Password

const fogotPassword = () => {
  const response = api('/api/user/reset-password');

  return response;
};

export { Login, RegisterRoute, Logout, fogotPassword, GetCustomerData };
