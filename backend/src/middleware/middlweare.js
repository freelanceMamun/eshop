import USER from '../models/users/users.model.js';

import JWT from 'jsonwebtoken';

// Forgot password Middleware

const forgotPasswordMiddleware = async (req, response, next) => {
  const { email } = req.body;

  if (!email) {
    return response.status(500).json({
      status: false,
      message: 'Please required the feild!',
    });
  }

  try {
    const findUser = await USER.findOne({ email });

    if (!findUser) {
      return response
        .status(404)
        .json({ message: 'User Not Found Please Login Now!', status: false });
    }

    const Token = JWT.sign({ id: findUser._id }, process.env.jWT_SECRETEkEY, {
      expiresIn: '3m',
    });

    const user = {
      name: findUser.name,
      id: findUser._id,
      Token,
    };

    req.UserFind = user;
    await res.cookie('resetp', Token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 120000, // 1 hour in milliseconds
    });

    next();
  } catch (error) {
    return response.status(404).json({ message: error.message, status: false });
  }
};

export { forgotPasswordMiddleware };
