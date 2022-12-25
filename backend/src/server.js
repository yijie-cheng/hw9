import express from 'express';
import cors from 'cors';
import db from './db'
import routes from './routes';
import dotenv from "dotenv-defaults";
dotenv.config();
 
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);
db.connect();