module.exports = (objRep) => (req, res, next) => {
    const deletedMonkeyById = objRep.monkeys[res.locals.monkeyIndex];
    objRep.monkeys.splice(res.locals.monkeyIndex, 1);
    return res.status(200).json({ deletedMonkeyById });
};