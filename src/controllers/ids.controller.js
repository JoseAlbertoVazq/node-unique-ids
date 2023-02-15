const {
    generateIds
} = require("../services/generation");
const logger = require('../config/winston');
const giveMeSomeIds = async (req, res, next) => {
    try {
        const count = parseInt(req.body.count, 10);
        const ids = await generateIds(count);
        return res.status(200).send({
            status: "OK",
            ids
        });
    } catch (error) {
        logger.error("Error: ", error);
        return res.status(400).send(error);
    }
}

module.exports = {
    giveMeSomeIds
}