const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const firebaseConfig = require('../../../private/config');

const app = initializeApp(firebaseConfig);
const auth = getAuth();

    const createUser = body => {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(
                auth, body.email, body.password
            ).then((userCredential) => {

                let newUser = {
                    uid: userCredential.user.uid,
                    accessToken: userCredential.user.accessToken,
                }

                resolve(newUser);
            })
                .catch((error) => {
                    reject(error);
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
                reject(err);
            })
        })
    }
    const logout = () => {
        return new Promise((resolve, reject) => { 
            signOut(auth).then( a => {
                console.log(a);
                resolve('User Logout');
                }).catch( error => {
                    console.error("error de Logout: "+error); 
                    reject(error);
                })
        })
    } 
module.exports = {
    createUser,
    isLogin,
    logout,
}