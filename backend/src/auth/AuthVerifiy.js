import jwt from 'jsonwebtoken';

// Generate a user login token

const genetateToken = async (_req, res, paload) => {
  // Set the token as a cookie

  const token = jwt.sign(paload, process.env.jWT_SECRETEkEY, {
    expiresIn: '1h',
  }); // Sign the token

  return await res.cookie('webnuxtauth', token, {
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

// Role base Middleware

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: 'Access Denied: Insufficient permissions' });
    }
    next();
  };
}
// Generate a user login token

const genetateTokenAdmin = async (_req, res, paload) => {
  // Set the token as a cookie

  const token = jwt.sign(paload, process.env.jWT_SECRETEkEY, {
    expiresIn: '1h',
  }); // Sign the token

  await res.cookie('adminshop', token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    maxAge: 3600000, // 1 hour in milliseconds
  });
};

// Verify Admin Token

const verifyAdminToken = async (req, res, next) => {
  const token = req.cookies.adminshop; // Token from cookies
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

/// Email Verify Auth

export {
  verifyToken,
  genetateToken,
  authorizeRoles,
  genetateTokenAdmin,
  verifyAdminToken,
};
