import { log } from 'console';
import express from 'express';
import GiftsController from '../controllers/gifts.js'



const router = express.Router();

router.get('/', GiftsController.getGifts)
router.get('/:giftId', GiftsController.getGiftById)

router.get('/:giftId', (req, res) => {
    console.log(path.resolve(__dirname, '../public/gift.html'));
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
    
  })

export default router