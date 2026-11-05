module.exports = (objRep) => (req, res, next) => {
    const monkeyId = parseInt(req.params.id, 10);
    const monkey = objRep.monkeys.find(m => m.id === monkeyId);

    if (monkey === undefined) {
        return res.status(404).json({
            Error: `Requested monkeyID not found! ${req.params.id}`
        });
    }
    return res.status(200).json(monkey);
};