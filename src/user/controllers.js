const User = require("./model");

exports.createUser = async (req, res) => {
    try {  
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.send({msg: "Create request sent"});
    } catch(error) {
        console.log(error);
        res.send({err: error});
    }
}

exports.findUser = async (req, res) => {
    try {  
        const results = await User.find(req.body);
        console.log(results);
        res.send({msg: "Get request sent"});
    } catch(error) {
        console.log(error);
        res.send({err: error});
    }
}

exports.updateUser = async (req, res) => {
    try {  
        const results = await User.updateOne({username: req.body.username}, {$set: {email: req.body.newEmail}});
        if (results.acknowledged) {
            console.log(`The email for user ${req.body.username} has been updated to ${req.body.newEmail}!`);
        } else {
            console.log("Your update request has failed");
        }
        res.send({msg: "Update request sent"});
    } catch(error) {
        console.log(error);
        res.send({err: error});
    }
}

exports.deleteUser = async (req, res) => {
    try {  
        const results = await User.deleteOne(req.body);
        if (results.acknowledged) {
            console.log(`You have deleted ${req.body.username}!`);
        } else {
            console.log("Your delete request has failed");
        }
        res.send({msg: "Deletion request has been sent"});
    } catch(error) {
        console.log(error);
        res.send({err: error});
    }
}

exports.login = async (req, res) => {
    try { 
        req.body.login ? res.send({Login: "Successful!"}) : res.send({Login: "Unsuccessful"});
    } catch(error) {
        console.log(error);
        res.send({err: error});
    }
}

// {
//     "username": "Bob",
//     "email": "bobsemail@bob.com",
//     "password": "bobisgoat2k7"
// }