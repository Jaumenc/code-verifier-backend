import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getMessage(Date?:string): Promise<BasicResponse>
}