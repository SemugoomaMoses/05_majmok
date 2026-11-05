module.exports = (objRep) => (req, res, next) => {
    console.table(objRep.bananas);
    return res.json(objRep.bananas);
};