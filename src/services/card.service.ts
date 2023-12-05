import { ParamsDictionary } from './../../node_modules/@types/express-serve-static-core/index.d';
import { AddCardResult, CardAttributes } from "../interfaces/card.interface";
import Card from "../models/card.model";

const onGetCards = async (): Promise<Card[]> => {

    const cards = await Card.findAll();

    return cards;

}

const onSingleGetCard = async (id: string): Promise<Card | null> => {

    const singleCard = await Card.findOne({
        where: {
            card_id: id
        }
    });

    return singleCard

}

const onAddCard = async (card: CardAttributes): Promise<AddCardResult> =>  {

    const {tarjeta} = card;

    const alreadyExists = await Card.findOne({ // to check the card already exists
        where: {
            tarjeta
        }
    })

    return {
        alreadyExists
    }

}

const onUpdateCard = async (card: CardAttributes, card_id: string) => {

    const updateCard = await Card.update(card, {
        where: {
            card_id
        }
    })

    return updateCard
}

const onDeleteCard = async (card_id: string): Promise<Number> =>{

    const deletedCard = await Card.destroy({
        where: {
            card_id
        }
    })

    return deletedCard;
}

export {
    onGetCards,
    onSingleGetCard,
    onAddCard,
    onUpdateCard,
    onDeleteCard
}