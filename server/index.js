import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config.js'
import appRoutes from './routes/app.routes.js'

const app = express();

app.use(express.json())
app.use(morgan())
app.use(cors())
app.use('/api', appRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(PORT, () => console.log('Server is running on port: ', PORT));