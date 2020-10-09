const Users = require('../Public/Users')

exports.toDoFilter = (req,res) => {
    try{
        //const result = Users.filter(item => item.age < age);
        const result = Users.filter(item => item.age > parseInt(req.query.to) && item.age < parseInt(req.query.do));
        const obj = new Object({
            num: result.length,
            data: result
        })
        res.status(200).json({
            success: true,
            data: obj
        })
    }
    catch (e){
        res.send(e)
    }
}

exports.search = (req,res) => {
    res.send('Salom Shahriyor')
}