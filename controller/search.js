const Users = require('../Public/Users')
exports.filter = (req,res) => {
    try{
        const result = Users.filter(item => item.age > parseInt(req.query.to) && item.age < parseInt(req.query.do));
        const obj = new Object({
            num: result.length,
            data: result
        });
        res.status(200).json({
            success: true,
            data: obj
        })
    }
    catch (e){
        res.send(e)
    }
}


