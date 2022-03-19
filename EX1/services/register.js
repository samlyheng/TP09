
const Users = require("../models/users");

const register = async (params) => {
    try {
        const {
            
            username,
            firstname,
            lastname,
            email,
            password
        } = params;

        console.log(params);
        // Read all users
        const existed = await Users.findOne({ email });
        if (existed)
        {
            throw "User is already existed~";
        }
            

      
        // check if user exists
        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password
        }
      
         
        // Insert to db
        const createdUser = await Users.create(newUser)
        return{
            success: true,
            data: createdUser,

        } 
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}
module.exports = {
    register,
}