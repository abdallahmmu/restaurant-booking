import { ErrorIF } from "../interfaces/globalError_IF";

export class globalErrorHandler extends Error implements ErrorIF{
    message: string;
    status:number;

    constructor(message:string,status:number){
        super();
        this.message=message;
        this.status = status
    }
}