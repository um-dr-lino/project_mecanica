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
    },
    async delete_user(id){
        return await loginModel.deleteUser(id);
    },
    async delete_owner(id){
        return await loginModel.deleteOwner(id);
    },
    async delete_vehicle(id){
        return await loginModel.deleteVehicle(id);  
    },
    async delete_brand(id){
        return await loginModel.deleteBrand(id);
    },
    async delete_model(id){
        return await loginModel.deleteModel(id);
    },
    async delete_service(id){
        return await loginModel.deleteService(id);
    },
    async delete_maintenance(id){
        return await loginModel.deleteMaintenance(id);
    },
    async update_user(id, dados){
        return await loginModel.updateUser(id, dados);
    },
    async update_owner(id, dados){
        return await loginModel.updateOwner(id, dados);
    },
    async update_vehicle(id, dados){
        return await loginModel.updateVehicle(id, dados);
    },
    async update_brand(id, dados){
        return await loginModel.updateBrand(id, dados);
    },
    async update_model(id, dados){
        return await loginModel.updateModel(id, dados);
    },
    async update_service(id, dados){
        return await loginModel.updateService(id, dados);
    },
    async update_maintenance(id, dados){
        return await loginModel.updateMaintenance(id, dados);
    }
}

