import USER from "../../models/users/users.model.js";
import { v4 as uuidv4 } from "uuid";
import becrypt from "bcrypt";
import { genetateToken, genetateTokenAdmin } from "../../auth/AuthVerifiy.js";

import JWT from "jsonwebtoken";

const CreateUser = async (request, response) => {
  const { name, email, password, phone } = request.body;

  // Validation

  try {
    if (!name || !email || !password || !phone) {
      return response.status(400).json({
        success: false,
        message: "Please required the feild!",
      });
    }

    // Exit User already exist
    const userExits = await USER.findOne({ email });

    if (userExits) {
      return response.status(400).json({
        success: false,
        message: "User Already Exist Please Login Now! ",
      });
    }

    // Create New User

    const createNewUser = await USER.create({
      name,
      email,
      password,
      phone,
    });

    await createNewUser.save();

    return response.status(201).json({
      success: true,
      message: "User Create Susscesfull!",
      createNewUser,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

// Login User

// const loginUser = async (request, response) => {
//   const { email, password } = request.body;

//   try {
//     if (!email || !password) {
//       return response.status(400).json({
//         success: false,
//         message: "Please required the feild!",
//       });
//     }

//     // Exit User not found
//     const userFound = await USER.findOne({ email });

//     if (!userFound) {
//       return response.status(400).json({
//         success: false,
//         message: "User Not Found Please Sign up now! ",
//       });
//     }

//     // Password Check Validtion

//     const Checkpassword = await becrypt.compare(password, userFound.password);
//     if (!Checkpassword) {
//       return response
//         .status(404)
//         .json({ success: false, message: "Invalid credentials" });
//     }

//     const payload = {
//       name: userFound.name,
//       id: userFound._id,
//       role: userFound.role,
//     };
//     // Genrate Token
//     await genetateToken(request, response, payload);

//     return response.status(200).json({
//       success: true,
//       message: "User Loggin Susscesfull!",
//       payload,
//     });
//   } catch (error) {
//     return response.status(400).json({
//       message: error.message,
//       status: false,
//     });
//   }
// };

// // Fogote Password
// const forgotePassword = async (request, response) => {
//   try {
//     const { password } = request.body;

//     return response.json({
//       status: true,
//       user: request.UserFind,
//     });
//     /// Generate
//   } catch (error) {
//     console.log(error);
//   }
// };

// // ForgotPassword save

// const forgoteSavePassword = async (request, response) => {
//   const { authorization } = request.headers;
//   const { password } = request.body;
//   // const updatePasswordData = {
//   //   password: 852369,
//   // };
//   // if (findUser) {
//   //   await USER.findOneAndUpdate({ email }, updatePasswordData, {
//   //     returnOriginal: false,
//   //   });
//   // }

//   // Token Verify in Reset Password
//   const responseUser = await JWT.verify(
//     authorization.split(" ")[1],
//     process.env.jWT_SECRETEkEY,
//     (err, user) => {
//       if (err) response.status(403).json("token is not valid");
//       return user;
//     }
//   );

//   // if response is true then password hasbeen saved

//   if (responseUser) {
//     await USER.findOneAndUpdate({ id });
//   }

//   console.log(authorization.split(" ")[1]);

//   console.log(responseUser);
// };

// // customer dashboard controllers
// const dashboardControllers = async (request, response) => {
//   return response
//     .status(200)
//     .json({ status: true, message: "Wel come to Dashboard" });
// };

export {
  CreateUser,
  // loginUser,
  // forgotePassword,
  // dashboardControllers,
  // forgoteSavePassword,
};
