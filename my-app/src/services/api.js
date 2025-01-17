import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

// Login Route api Fetch

const Login = (username, email, password) => {
  api.post('/api/user/login', { username, email, password });
};

// Register Route Api Fetch

const Register = (username, email, password) => {
  api.post('/api/user/create-user', { username, email, password });
};
