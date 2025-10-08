import { config } from "dotenv";

config();

// Config Env file
const configEnv = {
  PORT: process.env.PORT,
  DBURLNAME: process.env.DATABASE_URL,
  DBNAME: process.env.DATABASE_NAME,
  Env: process.env.envError,
  JWTSECKey: process.env.jWT_SECRETEkEY,
};

export default configEnv;
