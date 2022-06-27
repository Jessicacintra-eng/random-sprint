import "dotenv/config"
import  Express  from "express"

const app = Express();
app.use(Express.json());
app.use((req,res,next)=>{
    next();
});

export default app