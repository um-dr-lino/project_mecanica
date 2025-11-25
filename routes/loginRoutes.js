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
router.post('/criarMarca', verificaJWT, loginController.criarMarca)
router.post('/criarModelo', verificaJWT, loginController.criarModelo)
router.post('/criarServico', verificaJWT, loginController.criarServico)


// só os gets
router.get('/listarUsuarios', verificaJWT, loginController.listar_usuarios)
router.get('/listarProprietarios', verificaJWT, loginController.listar_proprietarios)
router.get('/listarVeiculos', verificaJWT, loginController.listar_veiculos)
router.get('/listarMarcas', verificaJWT, loginController.listar_marcas)
router.get('/listarModelos', verificaJWT, loginController.listar_modelos)
router.get('/listarServicos', verificaJWT, loginController.listar_servicos)
router.get('/listarManutencoes', verificaJWT, loginController.listar_manutencoes)

// só os puts
router.put('/atualizarUsuario/:id', verificaJWT, loginController.atualizarUsuario)
router.put('/atualizarProprietario/:id', verificaJWT, loginController.atualizarProprietario)
router.put('/atualizarVeiculo/:id', verificaJWT, loginController.atualizarVeiculo)
router.put('/atualizarMarca/:id', verificaJWT, loginController.atualizarMarca)
router.put('/atualizarModelo/:id', verificaJWT, loginController.atualizarModelo)
router.put('/atualizarServico/:id', verificaJWT, loginController.atualizarServico)
router.put('/atualizarManutencao/:id', verificaJWT, loginController.atualizarManutencao)
 
// so os deletes
router.delete('/deletarUsuario/:id', verificaJWT, loginController.deletarUsuario)
router.delete('/deletarProprietario/:id', verificaJWT, loginController.deletarProprietario)
router.delete('/deletarVeiculo/:id', verificaJWT, loginController.deletarVeiculo)
router.delete('/deletarMarca/:id', verificaJWT, loginController.deletarMarca)
router.delete('/deletarModelo/:id', verificaJWT, loginController.deletarModelo)
router.delete('/deletarServico/:id', verificaJWT, loginController.deletarServico)
router.delete('/deletarManutencao/:id', verificaJWT, loginController.deletarManutencao)

export default router;
