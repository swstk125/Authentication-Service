const USER_MODEL = require("../../db/models/user");
const _ = require("lodash");

class UserService {

    async getUser(query) {
        try {
            const data = await USER_MODEL.find({query});
            return data;
        } catch (error) {
            console.log("Could not find the user : ", error);
        }
    }

    async register(user) {
        try {

            let ifExistingUser = await USER_MODEL.find({ $or: [{name: user.name}, {email: user.email} ]});

            if(!_.isEmpty(ifExistingUser)){
                return { status: 403, message : "username or emailId already exists" };
            }

            // ?? encrypt password

            //
            const data = await USER_MODEL.create({ name: user.name, email : user.email, password : user.password});
            return data;

        } catch (error) {
            return console.log("Error in creating a new user : ", error);
        }
    }
}

module.exports = new UserService();