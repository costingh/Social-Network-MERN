const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// REGISTER USER
router.post('/register', async (req, res) => {
    try{

        // encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });


        // save user and send response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;