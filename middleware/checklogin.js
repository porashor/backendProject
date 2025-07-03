const jwt = require('jsonwebtoken')
const checklogin = (req, res, next) => {
    const {authorization} = req.headers
    try {
        const token = authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).send(error)
        next("auth error")
    }
}

module.exports = checklogin