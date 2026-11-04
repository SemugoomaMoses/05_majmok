module.exports = (objRep) => (req, res, next) => {
    const monkeyIdAsNumber = parseInt(req.params.id, 10);
    const index = objRep.monkeys.findIndex(m => m.id === monkeyIdAsNumber);

    if (index === -1) {
        return res.status(404).json({
            Error: `Requested monkeyID not found! ${req.params.id}`
        });
    }
    res.locals.monkeyIndex = index;
    return next();
};