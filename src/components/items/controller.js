const store = require('./store');

const addItems = body => {
    return new Promise((_res, _rej) => {
        if (!body.id) {
            console.error('[controller error] Uid vacío');
            _rej('Petición incorrecta');
        } else {
            store.createList(body);
            _res('Lista Creada!')
        }
    });
}
const showAll = async uid => {
    try {
        const query = await store.getAll(uid);
        const data = query !== null ? query : [];

        return data;
    } catch (e) {
        console.error('[controller error] Error de conexion en BD', err);
        return 'Algo falló intenta más tarde';
    }
}
const updateItem = body => {
    return new Promise((_res, _rej) => {
        if (!body.id) {
            console.error('[controller error] Uid vacío');
            _rej('Petición incorrecta');
        } else {
            store.updateList(body);
            _res('Actualizacion correcta!')
        }
    });
}
module.exports = {
    addItems,
    showAll,
    updateItem
}