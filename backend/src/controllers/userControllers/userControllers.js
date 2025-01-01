import USER from '../../models/users/users.model.js';
import { v4 as uuidv4 } from 'uuid';

import becrypt from 'bcrypt';

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
  } catch (error) {}
};

export { createUser };
