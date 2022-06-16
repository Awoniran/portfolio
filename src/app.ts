import express,{json} from 'express'
import router from './routes/route'
import {config} from 'dotenv'
import { HttpErrorHandler } from './controllers/homes'
config()
const app = express()
const port=process.env.PORT

app.use(json())
app.use(router)
app.use(HttpErrorHandler)

app.listen(port,()=>{
    console.log('app listening on port '+port)
})