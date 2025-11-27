export class BaseError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export class NotFoundError extends BaseError {
    constructor(message) {
        super(message, 404);
    }
}
export class BadRequestError extends BaseError {
    constructor(message) {
        super(message, 400);
    }
}
export class UnauthorizedError extends BaseError {
    constructor(message) {
        super(message, 401);
    }
}
export class ForbiddenError extends BaseError {
    constructor(message) {
        super(message, 403);
    }
}
export class InternalServerError extends BaseError {
    constructor(message) {
        super(message, 500);
    }
}
//# sourceMappingURL=ErrorClases.js.map