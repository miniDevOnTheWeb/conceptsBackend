import type { NextFunction, Request, Response } from "express"
import type { AppError } from "../types.js"

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.log(err)

    if (err.statusCode) {
        return res.status(err.statusCode).json({ error: err.message })
    } else {
        return res.status(500).json({ error: 'Error en la peticion' })
    }
}