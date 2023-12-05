
import {Router} from 'express';
import * as controller from '../controllers/card.controller';
import * as middleware from '../middlewares/validation.middleware'

const router = Router();

router.get('/', controller.getAllCardCtrl);

router.get('/:card_id', controller.getSingleCardCtrl);

router.post('/add', middleware.validator ,controller.addCardCtrl);

router.put('/:card_id', middleware.validator , controller.updateCardCtrl);

router.delete('/:card_id', controller.deleteCardCtrl);

export default router;
