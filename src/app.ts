import {config} from 'dotenv'
config()
import express,{json} from 'express'
import router from './routes/route'
import { HttpErrorHandler } from './controllers/homes'
const app = express()
const port=process.env.PORT

app.use(json())
app.use(router)
app.use(HttpErrorHandler)

app.listen(port,()=>{
    console.log('app listening on port '+port)
})