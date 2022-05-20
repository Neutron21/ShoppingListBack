const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');
const Unathorized = require('../../util/auth');

let bodyRes = {
    message: '',
    data: {},
    error: ''
};

router.post('/', async (req, res) => {
    const secret = req.headers.secret
    if (!secret) {
        bodyRes = Unathorized();
        response.error(res, bodyRes, 401, 'No secret header');
    } else {
        console.log(req.body);
        await controller.addItems(req.body).then(resolve => {
            bodyRes.message = resolve;
            bodyRes.data = req.body;
            response.success(res, bodyRes, 202);
        }).catch(err => {
            bodyRes.error = err
            response.error(res, bodyRes, 400, err);
        });

    }
 
});
router.get('/byid', async (req, res) => {
    const secret = req.headers.secret
    const uid = req.query.id;
    if (!secret) {
        bodyRes = Unathorized();
        response.error(res, bodyRes, 401, 'No secret header');
    } else {
        await controller.showAll(uid).then(resolve => {
            bodyRes.error = '';
            bodyRes.message = "Success query";
            bodyRes.data = resolve;
            response.success(res, bodyRes);
        }).catch(err => {
            bodyRes.error = err;
            bodyRes.message = 'X_X';
            bodyRes.data = {};
            response.error(res, bodyRes, 500, 'BD no conecta')
        })

    }

});
router.put('/', async (req, res) => {
    const secret = req.headers.secret
    
    if (!secret) {
        bodyRes = Unathorized();
        response.error(res, bodyRes, 401, 'No secret header');
    } else {
        await controller.updateItem(req.body).then(resolve => {
            bodyRes.message = resolve;
            bodyRes.data = {};
            bodyRes.error = '';
            response.success(res, bodyRes,202);
        }).catch(err => {
            bodyRes.error = err;
            bodyRes.message = '';
            bodyRes.data = {};
            response.error(res, bodyRes,500, 'BD no conecta')
        })

    }
});
module.exports = router;