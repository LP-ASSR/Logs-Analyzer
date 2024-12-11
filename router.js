const express = require('express');

exports.router =  (function () {
    const apiRouter = express.Router();

    apiRouter.get('/', function (req, res) {
        res.status(200).render('index');
    });

    return apiRouter;
})();