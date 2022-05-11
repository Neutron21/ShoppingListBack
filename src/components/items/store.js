const bd = require('../../db/conection');

const createList = async (body) => {
    const uid = body.id;
    const updates = {};
    updates[`users/${uid}/shoppingList`] = body.list;
    await bd.ref().update(updates);

}

const getAll = async (uid) => {
    return new Promise((resolve, reject) => {
        bd.ref(`users/${uid}/shoppingList`).on("value", (data) => {
            resolve(data.val());
        })
    })

}
const updateList = async (body) => {
    
    const uid = body.id;
    const updates = {};
    updates[`users/${uid}/shoppingList`] = body.list;

    await bd.ref().update(updates);
}
module.exports = {
    createList,
    getAll,
    updateList,
}