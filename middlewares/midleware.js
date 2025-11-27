export const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (err.statusCode) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    else {
        return res.status(500).json({ error: 'Error en la peticion' });
    }
};
//# sourceMappingURL=midleware.js.map