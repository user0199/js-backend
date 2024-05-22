import express from express
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// configurations
app.use(express.json({limit:"16kb"}))
app.use(express.urlencided({limit:"16kb" , extended:"true"}))
app.use(express.static("public"))

// cookie
app.use()




export {app}