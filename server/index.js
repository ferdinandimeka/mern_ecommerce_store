import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import db from './db/index.js';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5001;
dotenv.config();
db()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, '/uploads')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});