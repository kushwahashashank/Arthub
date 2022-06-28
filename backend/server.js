
const express = require ("express")
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

// const routeUrls = require('./routes/users')
const { notFound, errorHandler } = require("./middleware/errormiddleware")
const  useRoutes  = require("./routes/users")
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=> console.log("db connected"))

app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("API running")
// })
app.use(cors())  
// app.use('/app',routeUrls)
app.use('/api/users',useRoutes)
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server is up and running at ${PORT}`)) 
