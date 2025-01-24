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
 const response =  api.post()

};

// Logout User

const Logout = () => {
  api.get('/api/user/logout');
};

export { Login, RegisterRoute, Logout };
