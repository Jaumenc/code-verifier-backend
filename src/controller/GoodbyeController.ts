import { BasicResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodbyeController implements IGoodbyeController {

    public async getMessage(Date?: string | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/goodbye] Get Request');

        return {
            message: `Goodbye, ${Date || "World!"}`
        }
        
    }

}