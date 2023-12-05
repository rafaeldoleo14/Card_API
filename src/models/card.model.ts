import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database.config';
import moment from "moment";
import { CardAttributes } from "../interfaces/card.interface";
import { HookReturn } from "sequelize/types/hooks";
import { ValidationOptions } from "sequelize/types/instance-validator";


class Card extends Model<CardAttributes> {}

Card.init(
    {

        card_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        tarjeta: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },

        fecha: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cvv: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },

    {
        sequelize,
        modelName: 'card',
        tableName: 'cards',
        hooks: {
            beforeValidate: (card: any, options: ValidationOptions): HookReturn => {
                // Format date before valid
                if(card.fecha){
                    card.fecha = moment(card.fecha, 'MM/YY').format('MM/YY');
                }

            }
        }
    }

);

export default Card;