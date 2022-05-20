const store = require('./store');

const addUser = (body) => {
   return new Promise((_res, _rej) => {
        if (!body.name || !body.lastname || !body.email || !body.phone) {
            console.error('[userController error] Campos vacios',body);
            _rej('X_X Los datos son incorrectos');
        } else {
            delete body['password'];
            store.createUser(body);
            _res('Usuario Creado!')
        }
    });
}
const showAll = () => {
    return new Promise((_res, _rej) => {
        try {
            const data =  store.getAll();
            _res(data);
        } catch (err) {
            console.error('[userController error] Error de conexion en BD', err);
            _rej('Algo falló intenta más tarde');
        }
    });
}
const getUserById = (uid) => {
    return new Promise((_res, _rej) => {
        if (!uid) {
            console.error('[userController error] Uid vacío');
            _rej('Petición incorrecta');
        } else {
            const data = store.getById(uid);
            _res(data);
        }
    });
}
const updateUser = body => {
    return new Promise((_res, _rej) => {
        if (!body.id || !body.name || !body.lastname || !body.email || !body.phone) {
            console.error('[userController error] Campos vacios');
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