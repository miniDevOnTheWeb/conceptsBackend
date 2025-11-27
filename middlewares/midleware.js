import jwt, {} from 'jsonwebtoken';
export const errorHandler = (err, req, res, next) => {
    if (err.statusCode) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    else {
        return res.status(500).json({ error: 'Error en la peticion' });
    }
};
export const verifyToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header)
        return res.status(401).json({ error: 'El token de sesion no esta presente' });
    const token = header.split(' ')[1];
    if (!token)
        return res.status(401).json({ error: 'Token de sesion invalido' });
    jwt.verify(token, process.env.TOKEN_PRIVATE_KEY, (err, decode) => {
        if (err) {
            return res.status(401).json({ error: 'El token ha expirado' });
        }
        req.user = decode;
        next();
    });
};
//# sourceMappingURL=midleware.js.map