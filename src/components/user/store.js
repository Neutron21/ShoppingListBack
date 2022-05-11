const bd = require('../../db/conection');

const createUser = async (newUser) => {
    await bd.ref(`users/${newUser.uid}`).set(newUser);
}

const getAll = async () => {
    return new Promise((resolve, reject) => {
        bd.ref(`users`).on("value", (data) => {
            resolve(data.val());
        })
    })

}
const getById = async (uid) => {
    return new Promise((resolve, reject) => {
        bd.ref(`users/${uid}`).on("value", (data) => {
            resolve(data.val());
        })
    })

}
const updateById = async (body) => {
    const uid = body.id;

    const updates = {};

    updates[`users/${uid}/name`] = body.name;
    updates[`users/${uid}/lastname`] = body.lastname;
    updates[`users/${uid}/phone`] = body.phone;

    await bd.ref().update(updates)
}
module.exports = {
    createUser,
    getAll,
    getById,
    updateById
}