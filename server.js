import app from "./src/app.js"
const port = process.env.PORTA
import {db} from './src/infra/sqlite-db.js'
import {tips} from './src/controllers/tips-controllers.js'
tips(app, db)

app.listen(port,(port)=>{
  console.log("LISTEN WORKING")
})
