import type { AppError } from "../types.js";
export declare class BaseError extends Error implements AppError {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare class NotFoundError extends BaseError {
    constructor(message: string);
}
export declare class BadRequestError extends BaseError {
    constructor(message: string);
}
export declare class UnauthorizedError extends BaseError {
    constructor(message: string);
}
export declare class ForbiddenError extends BaseError {
    constructor(message: string);
}
export declare class InternalServerError extends BaseError {
    constructor(message: string);
}
//# sourceMappingURL=ErrorClases.d.ts.map