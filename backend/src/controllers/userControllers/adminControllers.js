// ==>  Admin Controllers Login Controller

import USER from "../../models/users/users.model.js";
import becrypt from "bcrypt";

import { genetateTokenAdmin } from "../../auth/AuthVerifiy.js";

const adminLoginControllers = async (request, response) => {
  const { email, password } = request.body;

  try {
    if (!email && !password) {
      return response.status(500).json({
        status: false,
        message: "Please required the feild!",
      });
    }

    const FindAdmin = await USER.findOne({ email });

    console.log(FindAdmin);

    const adminPassword = await becrypt.compare(password, FindAdmin.password);

    if (!FindAdmin.role.includes("admin")) {
      return response.status(404).json({
        status: false,
        message: "User Not Found!",
      });
    }

    if (!adminPassword) {
      return response.status(404).json({
        status: false,
        message: "Password invalid",
      });
    }

    const payload = {
      id: FindAdmin._id,
      name: FindAdmin.name,
      role: FindAdmin.role,
    };

    console.log(payload);

    /// Generate admin token

    await genetateTokenAdmin(request, response, payload);

    return response.status(200).json({
      success: true,
      message: " Admin User Logedin Susscesfull!",
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// ==>  Admin Controllers Admin Regeister

const adminDefaultContrllers = async (request, response) => {
  const { email } = request.body;
  const exisitadmin = await USER.findOne({ email });

  const hashPassword = await becrypt.hash("123456", 10);

  if (!exisitadmin) {
    await USER.create({
      email: "admin@gmail.com",
      name: "Super Admin",
      password: hashPassword,
      role: "admin",
    });
    console.log("default Admin Create!");
  }

  return response.status(201).json({
    status: true,
    message: "Admin Created",
  });
};

export { adminLoginControllers, adminDefaultContrllers };
