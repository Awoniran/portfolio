import express,{json} from 'express'

const app = express()
app.use(json())


app.use()
app.listen(3000,()=>{
    console.log('app listening on port 3000')
})