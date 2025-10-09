export const GlobalError = (error, req, res) => {
  return res.status(500).json({ error: error.message });
};

export default GlobalError;
