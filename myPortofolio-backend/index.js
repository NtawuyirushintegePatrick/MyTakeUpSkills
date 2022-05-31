const express=require("express")
const app =  express()
const mongoose =require("mongoose")
const dotenv=require("dotenv")
const bodyParse=require("body-parser")
const cors=require("cors")

const userRouter=require("./routes/user")
app.use(cors())


dotenv.config()
mongoose
.connect(process.env.DB_URL)
.then (()=> console.log("Db is connected"))
.catch((error)=>console.log(error,"Still refuse to connected"))


const port = 3000
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())


app.use("/api/v1/users",userRouter)



app.listen(port,()=> console.log(`app is running ${port}`))