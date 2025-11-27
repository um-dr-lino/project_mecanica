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
    IN p_placa_veiculo VARCHAR(10),
    IN p_id_modelo INT(11),
    IN p_id_proprietario INT(11),
    IN p_preco_veiculo DECIMAL(12,2),
    IN p_id_tipo INT(11), 
    IN p_ano INT(11)
)
BEGIN
    INSERT INTO veiculo(placa_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano)
    VALUES(p_placa_veiculo, p_id_modelo, p_id_proprietario, p_preco_veiculo, p_id_tipo, p_ano);
END;
DROP PROCEDURE IF EXISTS create_new_brand;
CREATE PROCEDURE create_new_brand (
    IN p_nome_marca VARCHAR(100)
)
BEGIN
    INSERT INTO marca (nome_marca) 
    VALUES (p_nome_marca);
END;
DROP PROCEDURE IF EXISTS create_new_model;
CREATE PROCEDURE create_new_model (
    IN p_nome_modelo VARCHAR(100),
    IN p_id_marca INT(11)
)
BEGIN
    INSERT INTO modelo (nome_modelo, id_marca) 
    VALUES (p_nome_modelo, p_id_marca);
END;
DROP PROCEDURE IF EXISTS create_new_service;
CREATE PROCEDURE create_new_service (
    IN p_nome_servico VARCHAR(100),
    IN p_descricao_servico VARCHAR(255)
)   
BEGIN
    INSERT INTO servico (nome_servico, descr_servico) 
    VALUES (p_nome_servico, p_descricao_servico);
END;
DROP PROCEDURE IF EXISTS delete_user;
CREATE PROCEDURE delete_user (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM usuario WHERE id_usuario = p_id;
END;
DROP PROCEDURE IF EXISTS delete_owner;
CREATE PROCEDURE delete_owner (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM proprietario WHERE id = p_id;
END;
DROP PROCEDURE IF EXISTS delete_vehicle;
CREATE PROCEDURE delete_vehicle (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM veiculo WHERE id = p_id;
END;
DROP PROCEDURE IF EXISTS delete_brand;
CREATE PROCEDURE delete_brand (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM marca WHERE id = p_id;
END;
DROP PROCEDURE IF EXISTS delete_model;
CREATE PROCEDURE delete_model (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM modelo WHERE id = p_id;
END;
DROP PROCEDURE IF EXISTS delete_service;
CREATE PROCEDURE delete_service (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM servico WHERE id = p_id;
END;
DROP PROCEDURE IF EXISTS delete_manutenance;
CREATE PROCEDURE delete_manutenance (
    IN p_id INT(11)
)
BEGIN
    DELETE FROM manutencao WHERE id = p_id;
END;
DROP PROCEDURE IF EXISTS update_user;
CREATE PROCEDURE update_user (
    IN p_id INT(11),
    IN p_username VARCHAR(100),
    IN p_senha VARCHAR(255),
    IN p_nome_completo VARCHAR(150)
)
BEGIN
    UPDATE usuario 
    SET username = p_username,
        senha = p_senha,
        nome_completo = p_nome_completo
    WHERE id_usuario = p_id;
END;
DROP PROCEDURE IF EXISTS update_owner;
CREATE PROCEDURE update_owner (
    IN p_id INT(11),
    IN p_cpf INT(20),
    IN p_nome VARCHAR(150),
    IN p_fone VARCHAR(30)
)
BEGIN
    UPDATE proprietario 
    SET cpf = p_cpf,
        nome = p_nome,
        fone = p_fone
    WHERE id_proprietario = p_id;
END;
DROP PROCEDURE IF EXISTS update_vehicle;
CREATE PROCEDURE update_vehicle (
    IN p_id INT(11),
    IN p_placa_veiculo VARCHAR(10),
    IN p_id_modelo INT(11),
    IN p_id_proprietario INT(11),
    IN p_preco_veiculo DECIMAL(12,2),
    IN p_id_tipo INT(11), 
    IN p_ano INT(11)
)   
BEGIN
    UPDATE veiculo 
    SET placa_veiculo = p_placa_veiculo,
        id_modelo = p_id_modelo,
        id_proprietario = p_id_proprietario,
        preco_veiculo = p_preco_veiculo,
        id_tipo = p_id_tipo,
        ano = p_ano
    WHERE id_veiculo = p_id;
END;
DROP PROCEDURE IF EXISTS update_brand;
CREATE PROCEDURE update_brand (
    IN p_id INT(11),
    IN p_nome_marca VARCHAR(100)
)
BEGIN
    UPDATE marca 
    SET nome_marca = p_nome_marca
    WHERE id_marca = p_id;
END;
DROP PROCEDURE IF EXISTS update_model;
CREATE PROCEDURE update_model (
    IN p_id INT(11),
    IN p_nome_modelo VARCHAR(100),
    IN p_id_marca INT(11)
)
BEGIN
    UPDATE modelo 
    SET nome_modelo = p_nome_modelo,
        id_marca = p_id_marca
    WHERE id_modelo = p_id;
END;
DROP PROCEDURE IF EXISTS update_service;
CREATE PROCEDURE update_service (
    IN p_id INT(11),
    IN p_descricao VARCHAR(255),
    IN p_preco DECIMAL(12,2)
)
BEGIN
    UPDATE servico 
    SET descricao = p_descricao,
        preco = p_preco
    WHERE id_servico = p_id;
END;
DROP PROCEDURE IF EXISTS update_manutenance;
CREATE PROCEDURE update_manutenance (   
    IN p_id INT(11),
    IN p_id_veiculo INT(11),
    IN p_id_servico INT(11),
    IN p_data_servico DATE,
    IN p_km INT(11),
    IN p_custo DECIMAL(12,2), 
    IN p_observaoces TEXT
)   
BEGIN
    UPDATE manutencao 
    SET id_veiculo = p_id_veiculo,
        id_servico = p_id_servico,
        data_servico = p_data_servico,
        km = p_km,
        custo = p_custo,
        observacoes = p_observaoces
    WHERE id_manutencao = p_id;
END;


