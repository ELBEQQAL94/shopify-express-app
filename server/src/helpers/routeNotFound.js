// page not found
const routeNotFound = (req, res, next) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
};

module.exports = routeNotFound;