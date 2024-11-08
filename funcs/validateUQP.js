// 02. Validate User info query parameters
const validateUserQPs = (req, res, next) => {
    const {firstname, lastname, gender} = req.query;

    if(!firstname || !lastname || !gender) {
        return res.status(400).send('Missing User Info!');
    }
}

module.exports = validateUserQPs;