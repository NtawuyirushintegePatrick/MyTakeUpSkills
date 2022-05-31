const {createUser,getUsers,userLogin} =require("../controllers/user")
const express =require("express")
const router = express.Router()


router.post("/create", createUser);
router.post("/login", userLogin);
router.get("/", getUsers)


module.exports=router