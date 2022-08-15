import express, { Request, Response } from 'express'
import 'dotenv/config'
import 'express-async-errors'
import router from './routes/user.routes'
import { MongooseConfig } from './database/mongoose.config'
import { AppError } from './errors/AppError'
//---------------------------------------------------------------------------------------------------------------------
// MONGOOSE CONNECT
//---------------------------------------------------------------------------------------------------------------------
new MongooseConfig(process.env.MONGO_URI).connect()
//---------------------------------------------------------------------------------------------------------------------
// APP CONFIGURATION
//---------------------------------------------------------------------------------------------------------------------
process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----');
    console.log(promise);
    console.log('----- Reason -----');
    console.log(reason);
});
const app = express()
app.use(express.json())
app.use(router)
//---------------------------------------------------------------------------------------------------------------------
// ERRORS MIDLWARE
//---------------------------------------------------------------------------------------------------------------------
app.use((err: Error, req: Request, res: Response, next: Function) => {
    if(err instanceof AppError){
        return res.status(err.statusCode)
        .json({
            status: "Error",
            message: err.message
        })
    }

    console.error(err)
    return res.status(500)
    .json({
        status: "Error",
        message: "Internal server error",
    })
})
//---------------------------------------------------------------------------------------------------------------------
app.listen(process.env.PORT || 3333 , () => {
    console.log('Server is running...')
})
//---------------------------------------------------------------------------------------------------------------------