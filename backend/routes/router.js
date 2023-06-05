import express from 'express';
import {
  deleteUserById,
  getAllUsers,
  register,
  updateUserData,
} from '../controllers/clientController.js';
import { adminLogin, adminRegister } from '../controllers/adminController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/register', register);
router.put('/user-update/:id', updateUserData);
router.delete('/user-delete/:id', deleteUserById);

router.post('/admin/register', adminRegister);
router.post('/admin/sign-in', adminLogin);

export default router;
