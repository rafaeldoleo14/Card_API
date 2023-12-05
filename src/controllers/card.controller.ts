import { Request, Response } from "express"
import Card from "../models/card.model";
import * as service from '../services/card.service'
import { handleError, middlewareError, notFoundCardError } from "../utils/handleErrors.util";

const getAllCardCtrl = async ({body}: Request, res: Response)=> {

    try {

        Card.sync();
        const cards =  await service.onGetCards();

        res.status(200).json({
            ok: true,
            msg: 'Get all card is successfull',
            cards
        })
        
    } catch (error) {
        console.log('object');
        console.log(error);
        handleError(res, 'Get all card is not posible')
    }

}

const getSingleCardCtrl = async ({params}: Request, res: Response)=> {

    try {

        const {card_id} = params;

        const singleCard = await service.onSingleGetCard(card_id)

        if(notFoundCardError(res, singleCard, 'Single card not found'))return;

        res.status(200).json({
            ok: true,
            msg: 'Get single card is successfull',
            singleCard
        })
        
    } catch (error) {
        handleError(res, 'Get single card is not posible')
    }

}

const addCardCtrl = async (req: Request, res: Response)=> {

    try{

        if(middlewareError(req,res)) return;

        const {alreadyExists} = await service.onAddCard(req.body);

        if(alreadyExists){
            return res.status(404).json({
                ok: false,
                error: 'Card already exists',
            })
        }

        const newCard = await Card.create(req.body);

        res.status(200).json({
            ok: true,
            msg: 'Card was added!!!',
            newCard
        })

    }
    catch(err){

        handleError(res, 'Add card is not posible')
        
    }

}

const updateCardCtrl = async (req: Request, res: Response) => {

    try {

        if(middlewareError(req,res)) return;

        const {card_id} = req.params
        const card = req.body

        const updatedCard =  await service.onUpdateCard(card, card_id);

        const affectedCount: number = updatedCard[0];

        if(affectedCount == 0){
            return res.status(404).json({
                ok: false,
                error: 'Card not found'
            })
        }

        res.status(200).json({
            ok: true,
            msg: 'Update card is successfull',
            updatedCard
        })
        
        
    } catch (error) {
        console.log(error);
    }

}

const deleteCardCtrl = async (req: Request, res: Response) => {

    try {

        const {card_id} = req.params;

        const deletedCard = await service.onDeleteCard(card_id);

        if(notFoundCardError(res, deletedCard, 'Card not found'))return;

        res.status(200).json({
            ok: true,
            msg: 'Card was deleted!!!',
            deletedCard
        })
        
    } catch (error) {
        
    }

}

export {
    getAllCardCtrl,
    getSingleCardCtrl,
    addCardCtrl,
    updateCardCtrl,
    deleteCardCtrl
}
