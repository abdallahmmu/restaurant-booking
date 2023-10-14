import express from 'express';
import { registerAccount } from './user.controller';

const userRoute = express.Router()


userRoute.post('/register', registerAccount)

export {
    userRoute
}
