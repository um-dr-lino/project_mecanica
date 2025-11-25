DROP VIEW IF EXISTS getallusers;
CREATE VIEW getallusers AS
SELECT 
    id_usuario AS matricula,
    username AS login,
    nome_completo AS "Nome completo"
FROM usuario;
DROP VIEW IF EXISTS getallowners;
CREATE VIEW getallowners AS
SELECT 
    id_proprietario AS id,
    cpf AS CPF,
    nome AS Nome,
    fone AS Telefone
FROM proprietario;
DROP VIEW IF EXISTS getallvehicles;
CREATE VIEW getallvehicles AS
SELECT 
    v.id_veiculo AS id,
    v.placa_veiculo AS Placa,
    m.nome_modelo AS Modelo,
    p.nome AS Proprietario,
    v.preco_veiculo AS Preco,
    t.tipo AS Tipo,
    v.ano AS Ano
FROM veiculo v
JOIN modelo m ON v.id_modelo = m.id_modelo
JOIN proprietario p ON v.id_proprietario = p.id_proprietario
JOIN tipo_veiculo t ON v.id_tipo = t.id_tipo;
DROP VIEW IF EXISTS getallbrands;
CREATE VIEW getallbrands AS
SELECT 
    id_marca AS id,
    nome_marca AS Marca
FROM marca;
DROP VIEW IF EXISTS getallmodels;
CREATE VIEW getallmodels AS
SELECT 
    mo.id_modelo AS id,
    mo.nome_modelo AS Modelo,
    ma.nome_marca AS Marca
FROM modelo mo
JOIN marca ma ON mo.id_marca = ma.id_marca;
DROP VIEW IF EXISTS getallservices;
CREATE VIEW getallservices AS
SELECT 
    id_servico AS id,
    descr_servico AS Descricao
    FROM servico;
DROP VIEW IF EXISTS getallmaintenances;
CREATE VIEW getallmaintenances AS
SELECT
    ma.id_manutencao AS id,
    v.placa_veiculo AS Veiculo,
    s.descr_servico AS Servico,
    ma.data_servico AS Data,
    ma.km AS KM,
    ma.custo AS Custo,
    ma.observacoes AS Observacoes
FROM manutencao ma
JOIN veiculo v ON ma.id_veiculo = v.id_veiculo
JOIN servico s ON ma.id_servico = s.id_servico;
