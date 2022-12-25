import express from 'express';
import cors from 'cors';
import db from './backend/db.js'
import routes from './backend/routes/index.js';
import dotenv from "dotenv-defaults";
dotenv.config();
import wakeUpDyno from "./backend/routes/wakeUpDyno.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
 
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use('/', routes);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(port, () => {
    const DYNO_URL = "https://my.app_A_heroku.com/"
    wakeUpDyno(DYNO_URL)
    console.log(`Example app listening on port ${port}!`)
});
db.connect();