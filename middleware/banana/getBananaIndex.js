module.exports = (objRep) => (req, res, next) => {
    const bananaId = parseInt(req.params.id, 10);
    const banana = objRep.bananas.find(b => b.id === bananaId);

    if (banana === undefined) {
        return res.status(404).json({
            Error: `Requested bananaID not found! ${req.params.id}`
        });
    }
    return res.status(200).json(banana);
};