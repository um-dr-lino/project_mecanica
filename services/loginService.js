import jwt from 'jsonwebtoken'
import { loginModel } from '../models/loginModel.js';

const SECRET = process.env.JWT_SECRET

export const loginService = {
    async login(username, senha){
        const user = await loginModel.findByUsername(username);

        if (!user) {
            return {status: 404, message: 'Not found - User or Password not found'}
        }
        if (user.senha !== senha) return {status: 401, message: 'Unauthorized'}
        
        const payload = {
            id: user.id_usuario, 
            username: user.username
        };
    
    const token = jwt.sign(payload, SECRET, {expiresIn: 300})
    return { status: 200, user: { id: user.id_usuario, username: user.username}, token};

    },
    async listar_usuarios(){
        return await loginModel.getAll();
    },
    async create_new_user(username, password, fullname){
        return await loginModel.createUser(username, password, fullname);
    },
    async create_new_owner(cpf, nome, fone){
        return await loginModel.createOwner(cpf, nome, fone);
    },
    async create_new_maintenance(id_veiculo, id_servico, data_servico, km, custo, observacoes){
        return await loginModel.createMantenance(id_veiculo, id_servico, data_servico, km, custo, observacoes)
    },
    async create_new_vehicle(plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano){
        return await loginModel.createVehicle(plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano)
    },
    async create_new_brand(nome_marca){
        return await loginModel.createBrand(nome_marca)
    },
    async create_new_model(nome_modelo, id_marca){
        return await loginModel.createModel(nome_modelo, id_marca)
    },
    async create_new_service(descricao, preco){
        return await loginModel.createService(descricao, preco)
    },
    async listar_proprietarios(){
        return await loginModel.getAllOwners();
    },
    async listar_veiculos(){
        return await loginModel.getAllVehicles();
    },
    async listar_marcas(){
        return await loginModel.getAllBrands();
    },
    async listar_modelos(){
        return await loginModel.getAllModels();
    },
    async listar_servicos(){
        return await loginModel.getAllServices();
    },
    async listar_manutencoes(){
        return await loginModel.getAllMaintenances();
    }
}

