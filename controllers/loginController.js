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
    async criarVeiculo(req, res) {
        const { plca_veiculo, id_modelo, id_proprietario, preco_veiculo, ano } = req.body || {};

        const obrigatorios = { plca_veiculo, id_modelo, id_proprietario, preco_veiculo, ano };

        const faltando = Object.entries(obrigatorios)
            .filter(([key, value]) => value === undefined || value === null || value === "")
            .map(([key]) => key);

        if (faltando.length > 0) {
            return res.status(400).json({
                error: `Campos obrigatórios ausentes: ${faltando.join(', ')}`
            });
        }

        try {
            let tipo_veiculo = 0;

            if (preco_veiculo <= 45000) {
                tipo_veiculo = 1;  // popular
            } else if (preco_veiculo > 45000 && preco_veiculo <= 90000) {
                tipo_veiculo = 2;  // luxo
            } else {
                tipo_veiculo = 3;  // super luxo
            }

            await loginService.create_new_vehicle(plca_veiculo,id_modelo,id_proprietario,preco_veiculo,tipo_veiculo,ano);

            return res.status(201).json({ message: "Veículo criado com sucesso!" });

        } catch (err) {
            console.error("Erro ao criar veículo:", err);
            return res.status(500).json({ message: err.sqlMessage || err.message });
        }
    },
    async criarMarca(req,res){
        const {nome_marca} = req.body || {};
        if (!nome_marca){
            return res.status(400).json({message: "O campo nome_marca é obrigatório."});
        }
        try{
            await loginService.create_new_brand(nome_marca);
            return res.status(201).json({message: "Marca criada com sucesso!"})
        }catch(err){
            console.error("Erro ao criar marca")
            return res.status(500).json({message: err.sqlMessage})
        }
    },
    async criarModelo(req,res){
        const {nome_modelo, id_marca} = req.body || {};
        const obrigatorios = [nome_modelo, id_marca];
        const faltando = obrigatorios.filter(campo => !req.body[campo]);
        if (faltando.length > 0){
            return res.status(400).json({error: `Campos obrigatórios ausentes, ${faltando.join(', ')}`});
        }
        try{
            await loginService.create_new_model(nome_modelo, id_marca);
            return res.status(201).json({message: "Modelo criado com sucesso!"})
        }catch(err){
            console.error("Erro ao criar modelo")
            return res.status(500).json({message: err.sqlMessage})
        }
    },
    async criarServico(req,res){
        const {descricao_servico, duracao_media} = req.body || {};
        const obrigatorios = [descricao_servico, duracao_media];
        const faltando = obrigatorios.filter(campo => !req.body[campo]);
        if (faltando.length > 0){
            return res.status(400).json({error: `Campos obrigatórios ausentes, ${faltando.join(', ')}`});
        }
        try{
            await loginService.create_new_service(descricao_servico, duracao_media);
            return res.status(201).json({message: "Serviço criado com sucesso!"})
        }catch(err){
            console.error("Erro ao criar serviço")
            return res.status(500).json({message: err.sqlMessage})
        }
    },
    async listar_proprietarios(req, res) {
        try{
            const listagem = await loginService.listar_proprietarios()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async listar_veiculos(req, res) {
        try{
            const listagem = await loginService.listar_veiculos()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async listar_marcas(req, res) {
        try{
            const listagem = await loginService.listar_marcas()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async listar_modelos(req, res) {
        try{
            const listagem = await loginService.listar_modelos()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async listar_servicos(req, res) {
        try{
            const listagem = await loginService.listar_servicos()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async listar_manutencoes(req, res) {
        try{
            const listagem = await loginService.listar_manutencoes()
            res.json(listagem)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },
    async deletarUsuario(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_user(id);
            res.status(200).json({message: "Usuario deletado com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar usuário:", err);
            res.status(500).json({error: err.message})
        }
    },
    async deletarProprietario(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_owner(id);
            res.status(200).json({message: "Proprietario deletado com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar proprietario:", err);
            res.status(500).json({error: err.message})
        }
    },
    async deletarVeiculo(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_vehicle(id);
            res.status(200).json({message: "Veículo deletado com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar veículo:", err);
            res.status(500).json({error: err.message})
        }
    },
    async deletarMarca(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_brand(id);
            res.status(200).json({message: "Marca deletada com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar marca:", err);
            res.status(500).json({error: err.message})
        }
    },
    async deletarModelo(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_model(id);
            res.status(200).json({message: "Modelo deletado com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar modelo:", err);
            res.status(500).json({error: err.message})
        }
    },
    async deletarServico(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_service(id);
            res.status(200).json({message: "Serviço deletado com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar serviço:", err);
            res.status(500).json({error: err.message})
        }
    },
    async deletarManutencao(req, res){
        const {id} = req.params;
        try{
            await loginService.delete_maintenance(id);
            res.status(200).json({message: "Manutenção deletada com sucesso!"})
        }catch(err){
            console.error("Erro ao deletar manutenção:", err);
            res.status(500).json({error: err.message})
        }
    },
    async atualizarUsuario(req, res) {
    const { id } = req.params;
    const dados = req.body;
        try {
            await loginService.update_user(id, dados);
            res.status(200).json({ message: "Usuário atualizado com sucesso!" });
        } catch (err) {
            console.error("Erro ao atualizar usuário:", err);
            res.status(500).json({ error: err.message });
        }
    },
    async atualizarProprietario(req, res){
        const {id} = req.params;
        const dados = req.body;
        try{
            await loginService.update_owner(id, dados);
            res.status(200).json({message: "Proprietario atualizado com sucesso!"})
        }catch(err){
            console.error("Erro ao atualizar proprietario:", err);
            res.status(500).json({error: err.message})
        }
    },
    async atualizarVeiculo(req, res){
        const {id} = req.params;
        const dados = req.body;
        try{
            await loginService.update_vehicle(id, dados);
            res.status(200).json({message: "Veículo atualizado com sucesso!"})
        }
        catch(err){
            console.error("Erro ao atualizar veículo:", err);
            res.status(500).json({error: err.message})
        }
    },
    async atualizarMarca(req, res){
        const {id} = req.params;
        const dados = req.body;
        try{
            await loginService.update_brand(id, dados);
            res.status(200).json({message: "Marca atualizada com sucesso!"})
        }catch(err){
            console.error("Erro ao atualizar marca:", err);
            res.status(500).json({error: err.message})
        }
    },
    async atualizarModelo(req, res){
        const {id} = req.params;
        const dados = req.body;
        try{
            await loginService.update_model(id, dados);
            res.status(200).json({message: "Modelo atualizado com sucesso!"})
        }catch(err){
            console.error("Erro ao atualizar modelo:", err);
            res.status(500).json({error: err.message})
        }
    },
    async atualizarServico(req, res){
        const {id} = req.params;
        const dados = req.body;
        try{
            await loginService.update_service(id, dados);
            res.status(200).json({message: "Serviço atualizado com sucesso!"})
        }catch(err){
            console.error("Erro ao atualizar serviço:", err);
            res.status(500).json({error: err.message})
        }
    },
    async atualizarManutencao(req, res){
        const {id} = req.params;
        const dados = req.body;
        try{
            await loginService.update_maintenance(id, dados);
            res.status(200).json({message: "Manutenção atualizada com sucesso!"})
        }catch(err){
            console.error("Erro ao atualizar manutenção:", err);
            res.status(500).json({error: err.message})
       }   
    }
};
