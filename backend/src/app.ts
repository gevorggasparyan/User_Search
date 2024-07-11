import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import searchRouter from './routes/search';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(searchRouter);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
