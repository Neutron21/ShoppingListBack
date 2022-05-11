const store = require('./store');

const addUser = (body) => {
   return new Promise((_res, _rej) => {
        if (!body.name || !body.lastname || !body.email || !body.phone) {
            console.error('[controller error] Campos vacios');
            _rej('X_X Los datos son incorrectos');
        } else {
            store.createUser(body);
            _res('Usuario Creado!')
        }
    });
}
const showAll = async () => {
    try {
        const data =  await store.getAll();
        return data;
    } catch (e) {
        console.error('[controller error] Error de conexion en BD', err);
        return 'Algo falló intenta más tarde';
    }
}
const getUserById = (uid) => {
    return new Promise((_res, _rej) => {
        if (!uid) {
            console.error('[controller error] Uid vacío');
            _rej('Petición incorrecta');
        } else {
            const data = store.getById(uid);
            _res(data);
        }
    });
    // try {
    //     const data =  await store.getById(uid);
    //     return data;
    // } catch (error) {
    //     console.error('[controller error] Error de conexion en BD', err);
    //     return 'Algo falló intenta más tarde';
    // }
}
const updateUser = body => {
    return new Promise((_res, _rej) => {
        if (!body.id || !body.name || !body.lastname || !body.email || !body.phone) {
            console.error('[controller error] Campos vacios');
            _rej('X_X Los datos son incorrectos');
        } else {
            store.updateById(body);
            _res('Actualizacion correcta!')
        }
    });
}
module.exports = {
    addUser,
    showAll,
    getUserById,
    updateUser
}