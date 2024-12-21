import app from './src/index.js';
import configEnv from './src/config/config.js';
const PORT = configEnv.PORT || 3100;

//  Auto Start Server function;
(function () {
  app.listen(PORT, (req, res) => {
    console.log(`MY Server is Runing http://localhost:${PORT}`);
  });
})();
