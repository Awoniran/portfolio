"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function response(res, statusCode, data) {
    const _status = `${statusCode}`.startsWith('2') ? 'success' : 'fail';
    res.status(statusCode).json({
        _status,
        data
    });
}
exports.default = response;
