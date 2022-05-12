const store = require('./store');

const addUser = body => {
    return new Promise( async (_res, _rej) => {
        if (!body.email || !body.password) {
            console.error('[controller error] Campos vacios');
            _rej('X_X Los datos son incorrectos');
        } else {
            let newUser = {
                body : {},
                message : 'Usuario Creado!'
            }
            try {
                newUser.body = await store.createUser(body);
                _res(newUser);
            } catch (error) {
                console.error(error);
                _rej(error);
            }
           
        }
    });
}
const login = body => {
    return new Promise( async (_res, _rej) => {
        if (!body.email || !body.password) {
            console.error('[controller error] Campos vacios');
            _rej('X_X Los datos son incorrectos');
        } else {
            let newUser = {
                body : {},
                message : 'Acceso Correcto!'
            }
            newUser.body = await store.isLogin(body);
            console.log(newUser);
            _res(newUser);
        }
    });
}
const logout = () => {
    return new Promise( async (_res, _rej) => {
        try {
            let newUser = {
                body : {},
                message : 'Operación Exitosa!'
            }
            newUser.message = await store.logout();
            _res(newUser);
        } catch (error) {
            _rej(error);
        }
            
        
    });
}
module.exports = {
    addUser,
    login,
    logout
}