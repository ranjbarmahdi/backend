const responseFormatter = (req, res, next) => {
    res.success = (data, statusCode = 200, message = '') => {
        res.status(statusCode).json({
            success: true,
            statusCode,
            data,
            message,
        });
    };

    res.error = (message = '', code = 400, details = {}) => {
        res.status(code).json({
            success: false,
            error: {
                code,
                message,
                details,
            },
        });
    };

    next();
};

export default responseFormatter;
