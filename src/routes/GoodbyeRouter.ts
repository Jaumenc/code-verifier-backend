import express, { Request, Response } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogError, LogInfo } from "../utils/logger";

// Router from express
let goodbyeRouter = express.Router();

// http://localhost:8000/api/goodbye?Date=27-03-2023/
goodbyeRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param 
        let Date: any = req?.query?.Date;
        LogInfo(`Query Param: ${Date}`)
        // Controller Instance to execute method
        const controller: GoodbyeController = new GoodbyeController();
        // Obtain Response
        const response = await controller.getMessage(Date);
        // Send to the client the response
        return res.send(response);
    })

// Export Goodbye Router
export default goodbyeRouter;