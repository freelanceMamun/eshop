export const GlobalError = (error, req, res) => {
  console.error(error.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};

// Forgot password Middleware

const forgotPasswordMiddleware = (req, res, next) => {
  const { email } = req.body;


};

export default GlobalError;
