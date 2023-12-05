import { ValidationChain, check } from "express-validator"

export const validator: ValidationChain[] = [

    check('tarjeta')
        .not()
        .isEmpty()
            .withMessage('The tarjeta property is required.')
        .isNumeric()
            .withMessage('The tarjeta property can only contain numbers')
        .isLength({min: 16, max: 16})
            .withMessage('The tarjeta property must be 16 characters')
        ,

    check('fecha')
        .not()
        .isEmpty()
            .withMessage('The fecha property is required.')
        .custom((value: string)=>{

            const [month, year] = value.split('-');

            if(Number(month) <= 0 || Number(month) > 12){
                throw new Error('Mouth is invalid (1 - 12)')
            }

            if(Number(year) < 22 || Number(year) > 27){
                throw new Error('Year is invalid (22 - 27)')
            }

            return true;

        }),


    check('nombre')
        .not()
        .isEmpty()
            .withMessage('The nombre property is required.')
        .isLength({min: 2})
            .withMessage('The nombre property must be more than 2 characters')
        .isLength({max: 20})
            .withMessage('The nombre property must be less than 20 characters')
        ,
                

    check('cvv')
        .not()
        .isEmpty()
            .withMessage('The cvv property is required.')
        .isLength({min: 2, max: 3})
            .withMessage('The cvv property must be 3 characters')

]