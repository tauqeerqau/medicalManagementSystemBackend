const statusCode = require('../enums/ResponseCodesEnum');

function sendResponse(res, code, message, data) {
    var response = {};
    if (data != null || data != undefined) {
        response = {
            code: code,
            message: message,
            data: data
        };
    } else {
        response = {
            code: code,
            message: message
        };
    }
    return res.status(code).json(response);
};

/**
 * call this function to send response to user when error occuered at any level
 * @param {*} res response obj to return api
 * @param {*} err Error occured
 */
function errReturned(res, err) {
    res
        .status(statusCode.BADREQUEST)
        .json({
            code: statusCode.BADREQUEST,
            message: res.__(err.message)
        });
}
module.exports = {
    sendResponse,
    errReturned
};