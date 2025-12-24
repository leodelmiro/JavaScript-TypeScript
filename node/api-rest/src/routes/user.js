import { Router } from 'express'
import userController from '../controllers/UserController'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

// Não deveria existir
// router.get('/', loginRequired, userController.index)
// router.get('/:id', userController.get)

router.post('/', userController.create)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router
