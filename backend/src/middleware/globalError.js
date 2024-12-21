export const GlobalError = (error, req, res) => {
  console.error(error.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};

export default GlobalError;
