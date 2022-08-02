const bcrypt = require("bcryptjs");
const User = require("../user/model");

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

exports.comparePass = async (req, res, next) => {
    try {
        const username = await User.find({username: req.body.username});
        req.body.login = await bcrypt.compare(req.body.password, username[0].password); 
        next();
        //take a password out of the body, hash the password and then return it to the body
    } catch (error) {
        console.log(error);
        res.send({err: error});
    }
}