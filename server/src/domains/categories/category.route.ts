import express from 'express'
import { addCategory, getAllCategories } from './category.controller'

export const categoryRoute = express.Router()


categoryRoute.post('/add',addCategory)
categoryRoute.get('/all',getAllCategories)
