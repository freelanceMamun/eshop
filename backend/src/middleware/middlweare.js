import USER from '../models/users/users.model.js';

// Forgot password Middleware

const forgotPasswordMiddleware = async (req, response, next) => {
  const { email } = req.body;

  try {
    const findUser = await USER.findOne({ email });

    if (!findUser) {
      return response
        .status(404)
        .json({ message: 'User Not Found Please Login Now!', status: false });
    }

    next();
  } catch (error) {
    return response.status(404).json({ message: error.message, status: false });
  }
};

export { forgotPasswordMiddleware };
