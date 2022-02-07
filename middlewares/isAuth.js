const jwt = require('jsonwebtoken')

const checkAuthentication = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) return res.sendStatus(403);
        console.log("decoded", decoded);
        req.user = decoded; // {id:?,role:?}
        next();
    });
}



module.exports = checkAuthentication