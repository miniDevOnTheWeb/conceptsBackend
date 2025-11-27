import type { NextFunction, Request, Response } from "express";
import type { AppError } from "../types.js";
export declare const errorHandler: (err: AppError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare const verifyToken: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=midleware.d.ts.map