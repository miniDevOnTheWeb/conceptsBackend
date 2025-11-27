import type { NextFunction, Request, Response } from "express"
import type { AppError } from "../types.js"
import jwt, { type JwtPayload } from 'jsonwebtoken'

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    if (err.statusCode) {
        return res.status(err.statusCode).json({ error: err.message })
    } else {
        return res.status(500).json({ error: 'Error en la peticion' })
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization']
    if (!header) return res.status(401).json({ error: 'El token de sesion no esta presente' })

    const token = header.split(' ')[1]
    if (!token) return res.status(401).json({ error: 'Token de sesion invalido' })

    jwt.verify(token, process.env.TOKEN_PRIVATE_KEY!, (err: jwt.VerifyErrors | null, decode: JwtPayload | undefined | string) => {
        if (err) {
            return res.status(401).json({ error: 'El token ha expirado' })
        }
        (req as any).user = decode
        next()
    })
}

