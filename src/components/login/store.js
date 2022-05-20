const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const firebaseConfig = require('../../../private/config');

const app = initializeApp(firebaseConfig);
const auth = getAuth();

    const createUser = body => {
        return new Promise((resolve, reject) => {
            console.log('Store', body);
            createUserWithEmailAndPassword(
                auth, body.email, body.password
            ).then((userCredential) => {
                let newUser = {
                    uid: userCredential.user.uid,
                    accessToken: userCredential.user.accessToken,
                }
                resolve(newUser);
            }).catch((error) => {
                console.error('[Error en createUserStore]:',error)
                    reject('El email ya esta registrado');
            });
        })

    }
    const isLogin = body => {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, body.email, body.password).
            then(userCredential => {
                let newUser = {
                    uid: userCredential.user.uid,
                    accessToken: userCredential.user.accessToken,
                } 
                resolve(newUser);
            }).catch(err => {
                console.error('[Error en LoginStore]:', err);
                reject('Usuario o Contraseña incorrectos');
            })
        })
    }
    const logout = () => {
        return new Promise((resolve, reject) => { 
            signOut(auth).then( a => {
                console.log(a);
                resolve('User Logout');
                }).catch( error => {
                    console.error("[Error de Logout]: "+error); 
                    reject('Error de Logout');
                })
        })
    } 
module.exports = {
    createUser,
    isLogin,
    logout,
}