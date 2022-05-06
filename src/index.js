const app = require('./app');

app.listen(app.get('port'));
console.clear()
console.log(`Sevidor corriendo en http://localhost:${app.get('port')}`);
