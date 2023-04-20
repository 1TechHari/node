import { Router, Request, Response, NextFunction } from "express";
import Container from "typedi";

const route = Router();

export default async (app: Router) => {

    app.use("/", route);
    const logger: any = Container.get("logger");

    route.get('/login',(req,res) => {

        res.json({'name':'harishankar'})
    });
    
}