import Card from "../models/card.model";

export interface CardAttributes {
    card_id: string;
    tarjeta: number;
    fecha: string;
    nombre: string;
    cvv: number
}

export interface AddCardResult {
    alreadyExists: Card | null;
}