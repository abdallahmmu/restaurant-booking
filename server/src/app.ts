import dotenv from 'dotenv'
dotenv.config()
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import db from './helpers/dbConnection'
import { userRoute } from './domains/users/user.route'
import { categoryRoute } from './domains/categories/category.route'
import { globalErrorHandler } from './helpers/globalErrorHandler'

const app = express()
app.use('/api/users', userRoute)
app.use('/api/category', categoryRoute)


// global wideCard Route catch 

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({ error: 'can not found this route' })
})

// Global Error Handling
app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof globalErrorHandler) {
        return res.status(error.status).json({ error: error.message })
    }
})

db.sync().then(res => {
    app.listen(process.env.PORT, () => {
        console.log('APP IS WORKING ON PORT' + process.env.PORT);
        console.log('DB CONNECTED');
    })
})