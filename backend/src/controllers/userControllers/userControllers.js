import USER from '../../models/users/users.model.js';
import { v4 as uuidv4 } from 'uuid';
import becrypt from 'bcrypt';
import { genetateToken, genetateTokenAdmin } from '../../auth/AuthVerifiy.js';

const createUser = async (request, response) => {
  try {
    const { name, email, password, role } = request.body;

    if (!name || !email || !password) {
      return response
        .status(400)
        .json({ success: false, message: 'Please Required Feild' });
    }

    const exisitUser = await USER.findOne({ email });

    if (exisitUser) {
      return response
        .status(400)
        .json({ success: false, message: 'User already Exists' });
    }

    // Password encrypt hashed--

    const encryptPassword = await becrypt.hash(password, 10);

    // new user

    const user = new USER({
      name,
      password: encryptPassword,
      email: email,
      uuid: uuidv4(),
    });

    // save to user
    await user.save();

    return response.status(201).json({
      success: true,
      message: 'user creaated successfully',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    return response
      .status(400)
      .json({ success: false, message: error.message });
  }
};

// Login User

const loginUser = async (request, response) => {
  const { email, password } = request.body;

  try {
    if (!email || !password) {
      return response.status(400).json({
        success: false,
        message: 'Please required the feild!',
      });
    }

    // Exit User not found
    const userFound = await USER.findOne({ email });

    if (!userFound) {
      return response.status(400).json({
        success: false,
        message: 'User Not Found Please Sign up now! ',
      });
    }

    // Password Check Validtion

    const Checkpassword = await becrypt.compare(password, userFound.password);
    if (!Checkpassword) {
      return response
        .status(404)
        .json({ success: false, message: 'Invalid credentials' });
    }

    const payload = {
      name: userFound.name,
      id: userFound._id,
      role: userFound.role,
    };
    // Genrate Token
    await genetateToken(request, response, payload);

    return response.status(200).json({
      success: true,
      message: 'User Loggin Susscesfull!',
      payload,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

// Fogote Password
const forgotePassword = async (request, response) => {
  const { email } = request.body;

  try {
    if (!email && !password) {
      return response.status(500).json({
        status: false,
        message: 'Please required the feild!',
      });
    }

    const findUser = await USER.findOne({ email });

    if (!findUser) {
      return response
        .status(404)
        .json({ message: 'User Not Found Please Login Now!', status: false });
    }

    // const updatePasswordData = {
    //   password: 852369,
    // };
    // if (findUser) {
    //   await USER.findOneAndUpdate({ email }, updatePasswordData, {
    //     returnOriginal: false,
    //   });
    // }

    // console.log(findUser);

    return response.json({ message: 'password update', status: true });
    /// Generate
  } catch (error) {
    console.log(error);
  }
};

// customer dashboard controllers
const dashboardControllers = async (request, response) => {
  return response
    .status(200)
    .json({ status: true, message: 'Wel come to Dashboard' });
};

// ==> ========== Admin Controllers

const adminControllers = async (request, response) => {
  const { email, password } = request.body;

  try {
    if (!email && !password) {
      return response.status(500).json({
        status: false,
        message: 'Please required the feild!',
      });
    }

    const FindAdmin = await USER.findOne({ email });
    const adminPassword = await becrypt.compare(password, FindAdmin.password);

    if (!FindAdmin.role.includes('admin')) {
      return response.status(404).json({
        status: false,
        message: 'User Not Found!',
      });
    }

    if (!adminPassword) {
      return response.status(404).json({
        status: false,
        message: 'Password invalid',
      });
    }

    const payload = {
      id: FindAdmin._id,
      name: FindAdmin.name,
      role: FindAdmin.role,
    };

    /// Generate admin token

    await genetateTokenAdmin(request, response, payload);

    return response.status(200).json({
      success: true,
      message: 'User Loggin Susscesfull!',
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export {
  createUser,
  loginUser,
  forgotePassword,
  adminControllers,
  dashboardControllers,
};
