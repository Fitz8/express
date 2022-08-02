const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
        //take a password out of the body, hash the password and then return it to the body
    } catch (error) {
        console.log(error);
        res.send({err: error});
    }
}