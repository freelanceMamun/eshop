export const GlobalError = (error, req, res) => {
  console.error("Global Error Handler:", error.message);
  return res.status(500).json({ error: error.message });
};

export default GlobalError;
