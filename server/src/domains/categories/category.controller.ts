import { NextFunction, Request, Response } from "express";
import { categoryModel } from "./category.model";
import { globalErrorHandler } from "../../helpers/globalErrorHandler";


// ADD-Category For Admin Only

export const addCategory = async (req: Request, res: Response, next: NextFunction) => {

    const { name } = req.body

    if (!name ) {
        return res.status(404).json({ error: 'Name Faild is Required and Must be admin' })
    }

    try {

        const added = await categoryModel.create({
            category_name: name
        })

        if (!added) {
            return res.status(404).json({ error: 'can not add a category' })
        }

        res.status(200).json({ message: 'category added successfully' })
    } catch (error: any) {
        error = new globalErrorHandler(error.message, error.status)
        next(error)
    }

}

//Get All Categories

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allCategories = await categoryModel.findAll()
        const categoriesCount = await categoryModel.count()
        if (!allCategories) {
            return res.status(404).json({ error: 'can not get categories' })
        }
        res.status(200).json({ categories: allCategories, count: categoriesCount, success: true })
    } catch (error: any) {
        error = new globalErrorHandler(error.message, error.status)
        next(error)
    }
}



//Edit-Category Only For Admin


export const editCategoryById = async (req:Request,res:Response,next:NextFunction) => {
    const {name,updatedName} = req.body

    if(!name || !updatedName){
        return res.status(404).json({error:'ID is required and Must be Admin'})
    }

    try {
       const updatedDone = categoryModel.update({name:updatedName},{
            where:{
                name:name
            }
        })

        if(!updatedDone){
            return res.status(404).json({error:'faild to update category'})
        }

        res.status(200).json({message:'updated Done Sccessfully!!'})
    } catch (error) {
        
    }

}



