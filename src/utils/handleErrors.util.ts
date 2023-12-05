import { Request, Response } from "express"
import { validationResult } from "express-validator";

export const handleError = (res: Response , errorMessage: string)=>{

    return res.status(400).json({
        ok: false,
        error: errorMessage
    })

}

export const notFoundCardError = (res: Response, card: any, error: string)=> {

    if(!card){
        return res.status(404).json({
            ok: false,
            error
        })
    }

}

export const middlewareError = (req: Request, res: Response)=> {
    
    const errors = validationResult(req);

        if(!errors.isEmpty()){ // validation middleware
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }
}