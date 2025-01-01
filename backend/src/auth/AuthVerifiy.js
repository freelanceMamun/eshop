import jwt from 'jsonwebtoken';

// Generate a user login token

const genetateToeke = async (req, res, paload) => {
  // Set the token as a cookie

  const user = { id: 1, username: 'Mamun' }; // Replace with your user data
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // Sign the token

  res.cookie('token', paload, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    maxAge: 3600000, // 1 hour in milliseconds
  });
};

// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
  const token = req.cookies.webnuxtauth; // Token from cookies
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = await jwt.verify(token, process.env.jWT_SECRETEkEY);
    req.user = decoded; // Attach user data to the request object
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

export { verifyToken };
