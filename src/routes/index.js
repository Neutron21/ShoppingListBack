const { Router } = require('express');
const dummy = require('../assets/dumy')
const router = Router();

router.get('/', (req, res) => {
    res.writeHead(201, {'Content-Type': 'application/json'});
    console.log('Index Works');
    res.render('index');
})
router.post('/saludo', (req, res) => {
    console.log(req.body);
    
    let saludo = {
        hola: 'Hola '+ req.body.name
    }
    res.writeHead(202, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(saludo));
    res.end();
    // res.render('hola');
})
router.get('/dummy', (req, res) => {
    console.log('Dummy Works');
    res.writeHead(201, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(dummy)); 
    res.end();
})

module.exports = router;