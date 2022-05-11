const express = require('express');
const user = require('../components/user/network');
const items = require('../components/items/network');
const login = require('../components/login/network');

const router = function (server) {
    server.use('/user', user);
    server.use('/items', items);
    server.use('/login', login);
}

module.exports = router;