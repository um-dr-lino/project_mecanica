import { loginService } from '../services/loginService.js'; 

export const loginController = {
    async login(req, res) {
        const { username, senha } = req.body || {};
        if (!username || !senha){
            return res.status(403).json({status: 403, message: "Forbidden - User and password are required"})
        }
        const result = await loginService.login(username, senha);

        if (result.status !== 200){
            return res.status(result.status).json({
                auth: false, 
                message: result.message
            });
        }else{
            return res.status(200).json({
                auth:true,
                token: result.token,
                user:result.user
            })
        }
    },
    async listar_usuarios(req, res) {
        try{
            const listagem = await loginService.listar_usuarios()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async criarUsuario(req, res) {
        const { username, senha, nome_completo } = req.body || {};
        if (!username || !senha || !nome_completo) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios (username, senha, nome_completo)." });
        }
        try {
            await loginService.create_new_user(username, senha, nome_completo);
            res.status(201).json({message: "Usuario criado com sucesso!"})       
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return res.status(500).json({ message: error.sqlMessage });
        }
    },
    async criaProprietario(req,res){
        const {cpf, nome, fone} = req.body || {};
        if (!cpf || !nome, !fone){
            return res.status(400).json({message: "Todos os campos são obrigatório (cpf, nome, telefone)."});
        }
        try{
            await loginService.create_new_owner(cpf, nome, fone);
            res.status(201).json({message: "Proprietario criado com sucesso!"})
        }catch(err){
            console.error("Erro ao criar proprietario", err);
            return res.status(500).json({message: err.sqlMessage})
        }
    },
    async criaManutencao(req, res){
        const {id_veiculo, id_servico, data_servico, km, custo, observacoes} = req.body || {};
        const obrigatorios = ['id_veiculo', 'id_servico', 'data_servico', 'km', 'custo'];
        const faltando = obrigatorios.filter(campo => !req.body[campo]);

        if (faltando.length > 0) {
        return res.status(400).json({
            error: `Campos obrigatórios ausentes: ${faltando.join(', ')}`
        });
        }
        try{
            await loginService.create_new_maintenance(id_veiculo, id_servico, data_servico, km, custo, observacoes);
            return res.status(201).json({message: "Manutencao criada com sucesso!"})
        }catch(err){
            console.error("Erro ao criar manutencao")
            return res.status(500).json({message: err.sqlMessage})
        }
    },
    async criarVeiculo(req,res){
        const {plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano} = req.body || {};
        const obrigatorios = [plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano];
        const faltando = obrigatorios.filter(campo => !req.body[campo]);

        if (faltando.length > 0){
            return res.status(400).json({error: `Campos obrigatórios ausentes, ${faltando.join(', ')}`});
        }
        try{
            await loginService.create_new_vehicle(plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano);
            return res.status(201).json({message: "Veiculo criado com sucesso!"})
        }catch(err){
            console.error("Erro ao criar veículo")
            return res.status(500).json({message: err.sqlMessage})
        }
    }
};
