export interface User {
    username: string,
    id: string
}

export interface AppError extends Error {
    statusCode?: number
}