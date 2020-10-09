const Users = require('../Public/Users')

class Filter {
    constructor(age) {
        this.age = age
    }
    filer(){
        return Users.filter(item => item.age > age)
        return new Object({
            num: Users.length,
            Users
        })
    }
}
module.exports = Filter