DROP PROCEDURE IF EXISTS create_new_user; 

CREATE PROCEDURE create_new_user (
    IN p_username VARCHAR(100),
    IN p_senha VARCHAR(255),
    IN p_nome_completo VARCHAR(150)
)
BEGIN
    INSERT INTO usuario (username, senha, nome_completo) 
    VALUES (p_username, p_senha, p_nome_completo);
END;

DROP PROCEDURE IF EXISTS create_new_owner;
CREATE PROCEDURE create_new_owner (
    IN p_cpf INT(20),
    IN p_nome VARCHAR(150),
    IN p_fone VARCHAR(30)
)
BEGIN
    INSERT INTO proprietario (cpf, nome, fone)
    VALUES(p_cpf, p_nome, p_fone);
END;

DROP PROCEDURE IF EXISTS create_new_manutenance;
CREATE PROCEDURE create_new_manutenance(
    IN p_id_veiculo INT(11),
    IN p_id_servico INT(11),
    IN p_data_servico DATE,
    IN p_km INT(11),
    IN p_custo DECIMAL(12,2), 
    IN p_observaoces TEXT
)
BEGIN
    INSERT INTO manutencao(id_veiculo, id_servico, data_servico, km, custo, observacoes)
    VALUES(p_id_veiculo,p_id_servico,p_data_servico,p_km,p_custo,p_observaoces);
END;

DROP PROCEDURE IF EXISTS create_new_vehicle;
CREATE PROCEDURE create_new_vehicle(
    IN p_plca_veiculo VARCHAR(10),
    IN p_id_modelo INT(11),
    IN p_id_proprietario INT(11),
    IN p_preco_veiculo DECIMAL(12,2),
    IN p_id_tipo INT(11), 
    IN p_ano INT(11)

    INSERT INTO veiculo(plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano)
    VALUES(p_plca_veiculo, p_id_modelo, p_id_proprietario, p_preco_veiculo, p_id_tipo, p_ano)
)



