const GlobalError = (error, _request, response, next) => {
  if (error) {
    return response
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  } else {
    next();
  }
};

export default GlobalError;
