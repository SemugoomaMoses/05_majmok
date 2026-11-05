const getMonkeys = require('../middleware/monkey/getMonkeys');
const getMonkeyIndex = require('../middleware/monkey/getMonkeyIndex');
const getMonkey = require('../middleware/monkey/getMonkey');
const createMonkey = require('../middleware/monkey/createMonkey');
const updateMonkey = require('../middleware/monkey/updateMonkey');
const deleteMonkey = require('../middleware/monkey/deleteMonkey');
const deleteMonkeyBananas = require('../middleware/monkey/deleteMonkeyBananas');

const getBananas = require('../middleware/banana/getBananas');
const getBananaIndex = require('../middleware/banana/getBananaIndex');
const getBanana = require('../middleware/banana/getBananas');
const createBanana = require('../middleware/banana/createBanana');
const updateBanana = require('../middleware/banana/updateBanana');
const deleteBanana = require('../middleware/banana/deleteBanana');

const addRoutes = (app) => {
    const objRep = {
        monkeys: [
            { id: 1, name: 'Joe', sex: 'male', species: 'gibbon' },
            { id: 2, name: 'Josephine', sex: 'female', species: 'gorilla' },
            { id: 3, name: 'Lajos', sex: 'male', species: 'orangutan' }
        ],
        bananas: [
            { id: 1, color: 'yellow', sweet: false, monkeyId: null },
            { id: 2, color: 'yellow', sweet: true, monkeyId: null },
            { id: 3, color: 'green', sweet: true, monkeyId: null },
            { id: 4, color: 'green', sweet: false, monkeyId: null }
        ],
        globalMonkeyId: 4,
        globalBananaId: 5
    };

    app.get('/monkey', getMonkeys(objRep));
    app.post('/monkey', createMonkey(objRep));
    app.get('/monkey/:id', getMonkey(objRep));
    app.delete('/monkey/:id', getMonkeyIndex(objRep), deleteMonkeyBananas(objRep), deleteMonkey(objRep));
    app.patch('/monkey/:id', getMonkeyIndex(objRep), updateMonkey(objRep));

    app.get('/banana', getBananas(objRep));
    app.post('/banana', createBanana(objRep));
    app.get('/banana/:id', getBanana(objRep));
    app.delete('/banana/:id', getBananaIndex(objRep), deleteBanana(objRep));
    app.patch('/banana/:id', getBananaIndex(objRep), updateBanana(objRep));
};

module.exports = addRoutes;