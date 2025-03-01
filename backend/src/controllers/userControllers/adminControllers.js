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
      message: ' Admin User Logedin Susscesfull!',
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


export { adminControllers}