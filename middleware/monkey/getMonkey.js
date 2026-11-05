module.exports = (objRep) => (req, res, next) => {
    console.table(objRep.monkeys);
    return res.json(objRep.monkeys);
};

