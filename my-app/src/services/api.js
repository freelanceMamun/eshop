import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

// Login Route api Fetch

const Login = (email, password) => {
  api.post('/api/user/login', { email, password });
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

// Logout User

const Logout = () => {
  api.get('/api/user/logout');
};

export { Login, RegisterRoute, Logout };
