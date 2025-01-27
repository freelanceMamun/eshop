export const GlobalError = (error, req, res) => {
  console.error(error.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};

// Forgot password Middleware

const forgotPasswordMiddleware = async (req, res, next) => {
  const { email } = req.body;

  try {
    const findUser = await USER.findOne({ email });

    if (!findUser) {
      return response
        .status(404)
        .json({ message: 'User Not Found Please Login Now!', status: false });
    }

    next();
  }                                                                                                                                                                                                                 catch (error) {}
};

export default GlobalError;
