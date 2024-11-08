// 01. Function to validate query parameters
const validateProductQPs = (req, res, next) => {
    const {product, category, price} = req.query;
    
    if(!product || !category || !price) {
        return res.status(400).send('Missing category | price!');
    }
    next();
}

module.exports = validateProductQPs;