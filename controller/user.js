const User = require('../models/User');
exports.register = async (req, res) => {
    const user = await new Object({
        email:req.body.email,
        password: req.body.password,
        name: req.body.name
    })
    user.save()
        
        .then(() => {
            res.status(201).json({
                success: true,
                data: user
            })
        })
        .catch((error) => {
            res.status(400).json({
                success: false,
                error: error
            })
        })

}