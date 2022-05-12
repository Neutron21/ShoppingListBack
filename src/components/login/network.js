const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');
const controllerUser = require('../user/controller');
const Unathorized = require('../../util/auth');

let bodyRes = {
    message: '',
    data: {},
    error: ''
};

router.post('/register', (req, res) => {
    const secret = req.headers.secret
    if (!secret) {
        bodyRes = Unathorized();
        response.error(res, bodyRes, 401, 'No secret header');
    } else {
        const body =req.body;
         controller.addUser(body).then(resolve => {
            body.uid = resolve.body.uid;
            controllerUser.addUser(body).then(_res => {
                bodyRes.message = resolve.message;
                bodyRes.data = resolve.body;
                response.success(res, bodyRes, 201);
            }).catch(err => {
                bodyRes.error = err;
                bodyRes.data = {};
                response.error(res, bodyRes, 400, err);
            });
        }).catch(err => {
            bodyRes.error = err;
            bodyRes.message = 'Internal Error';
            bodyRes.data = {};
            response.error(res, bodyRes, 400, err);
        })

    }
})
router.post('/', (req, res) => {
    const secret = req.headers.secret
    if (!secret) {
        bodyRes = Unathorized();
        response.error(res, bodyRes, 401, 'No secret header');
    } else {
        const body =req.body;
         controller.login(body).then(resolve => {
            bodyRes.message = resolve.message;
            bodyRes.data = resolve.body;
            response.success(res, bodyRes, 201);
        }).catch(err => {
            bodyRes.error = err;
            bodyRes.message = 'Internal Error';
            bodyRes.data = {};
            response.error(res, bodyRes, 400, err);
        })
    }
})
router.post('/logout', (req, res) => {
    const secret = req.headers.secret
    if (!secret) {
        bodyRes = Unathorized();
        response.error(res, bodyRes, 401, 'No secret header');
    } else {
        
         controller.logout().then(resolve => {
            bodyRes.message = resolve.message;
            bodyRes.data = resolve.body;
            response.success(res, bodyRes, 201);
        }).catch(err => {
            bodyRes.error = err;
            bodyRes.message = 'Internal Error';
            bodyRes.data = {};
            response.error(res, bodyRes, 400, err);
        })
    }
})
module.exports = router;