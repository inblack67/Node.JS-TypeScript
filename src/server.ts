import express, { Application, Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
import 'colors';

const app: Application = express();

dotenv.config({ path: 'config.env' });

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Api up and running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold)
});