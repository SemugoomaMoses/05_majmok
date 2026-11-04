module.exports = (objRep) => (req, res, next) => {
    const monkeyId = objRep.monkeys[res.locals.monkeyIndex].id;
    for (let i = objRep.bananas.length - 1; i >= 0; i--) {
        if (objRep.bananas[i].monkeyId === monkeyId) {
            objRep.bananas.splice(i, 1);
        }
    }
    return next();
};