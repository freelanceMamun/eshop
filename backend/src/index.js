import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import globalError from './middleware/globalError.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'working was perfect' });
});

// ====== Global Error Handelr ============
app.use(globalError);

export default app;
