import express,{json} from 'express'
import router from './routes/route'
import {config} from 'dotenv'
import { HttpErrorHandler } from './controllers/homes'
config()



const app = express()
app.use(json())


app.use(router)
app.use(HttpErrorHandler)

app.listen(3000,()=>{
    console.log('app listening on port 3000')
})