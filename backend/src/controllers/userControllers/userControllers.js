import USER from '../../models/users/users.model.js';
import { v4 as uuidv4 } from 'uuid';

import becrypt from 'bcrypt';
import { genetateToeke } from '../../auth/AuthVerifiy.js';

const createUser = async (request, response) => {
  try {
    const { username, email, password } = request.body;

    if ((!username, !email, !password)) {
      throw new Error('All field are required');
    }

    const exisitUser = USER.findOne(email);

    if (exisitUser) {
      return request
        .status(400)
        .json({ success: false, message: 'User already Exists' });
    }

    // Password encrypt hashed

    const encryptPassword = await becrypt.hash(password, 10);

    // new user

    const user = new USER({
      username,
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
        ...USER._doc,
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
  const { email, password, username } = request.body;

  try {
    if (!email || !username || !password) {
      return response.status(400).json({
        success: false,
        message: 'Please required the feild!',
      });
    }

    // Exit User not found
    const userFound = await USER.findOne({ email, username });

    if (!userFound) {
      return response.status(400).json({
        success: false,
        message: 'User Not Found Please Sign up now! ',
      });
    }

    // Password Check Validtion

    const Checkpassword = await becrypt.compare(password, userFound.password);
    if (!Checkpassword) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid credentials' });
    }

    const payload = {
      name: userFound.username,
      id: userFound._id,
    };
    // Genrate Token
    await genetateToeke(request, response, payload);

    return response.status(200).json({
      success: true,
      message: 'User Loggin Susscesfull!',
    });
  } catch (error) {}
};

export { createUser };
