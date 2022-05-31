const User=require("../models/user")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

// create a user 
const createUser = async (req, res) => {
    try {

        const password = req.body.password
        const newUser = new User({
            fullName: req.body.fulltName,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString()
        });
        const userSaved = await newUser.save();
        res.status(201).json({
            data: userSaved, 
            message: "user created successfull"
        })
    }catch(err){
        console.log(err)
    }
}
//get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            data:users, 
            message:"Get all users successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}



    //login
    const userLogin = async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            !user && res.status(401).json("wrong credentials!")
    
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            originalPassword !== req.body.password && res.status(401).json({
                status: 'fail',
                message: 'wrong credentials!'
            });

            const accessToken = jwt.sign(
                {
                    id: user._id,
                    email: user.email
                },
                process.env.JWT_SEC, { expiresIn: "1h" }
            );
    
            const { password, ...others } = user._doc;
    
            res.status(200).json({ status: 'success', ...others, accessToken, message: 'loged in successful' });
        } catch (error) {
            console.log(error)
        }
    }


module.exports={createUser, getUsers, userLogin}