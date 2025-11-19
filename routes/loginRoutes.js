import express from 'express';
import {loginController} from '../controllers/loginController.js';
import { verificaJWT } from '../middleware/authMiddleware.js';

const router = express.Router();
// só os posts
router.post('/login', loginController.login)
router.post('/criarUsuario', verificaJWT, loginController.criarUsuario)
router.post('/criaProprietario', verificaJWT, loginController.criaProprietario)
router.post('/criaManutencao', verificaJWT, loginController.criaManutencao)
router.post('/criarVeiculo', verificaJWT, loginController.criarVeiculo)

// só os gets
router.get('/listarUsuarios', verificaJWT, loginController.listar_usuarios)

// só os puts
 
// so os deletes

export default router;
