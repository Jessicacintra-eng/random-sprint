import app from "../app.js"
import { db } from "../infra/sqlite-db.js";
import { Tips } from "../models/tips-models.js";

export const tips = (app) => {

    app.get('/tips', (req, res) => {
        res.json({"Those are the tips you got" : db})
    })

    app.post('/tips/create', (req,res) => {
        try{
            const body = req.body;
            const newTip = new Tips(body.title, body.description)
            db.tips.push(newTip)
            res.json({'Added Tip:' : newTip})

        }catch(error){
            res.json({'Error': error.message})
        }
    })

    app.get('/tips/tip-random', (req, res) => {
        const numberOfTips = db.tips.length
        let indexOfTips = Math.floor(Math.random() * numberOfTips) 
        const randomTip = db.tips.filter(d => db.tips.indexOf(d) === indexOfTips)

        res.json({'Here your random tip of the day': randomTip})
    })
}