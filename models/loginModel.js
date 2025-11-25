import { pool } from '../config/db.js';

export const loginModel = {
  async findByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM usuario where username = ?', [username]);
    return rows[0];
  },
  async getAll(){
    const [rows] = await pool.query('SELECT * FROM getallusers');
    return rows;
  },
  async createUser(username, senha, nome_completo) {
    const sql = 'CALL create_new_user(?, ?, ?)';
    const [result] = await pool.query(sql, [username, senha, nome_completo]); 
    return result;
  },
  async createOwner(cpf,nome,fone){
    const sql = 'CALL create_new_owner(?,?,?)';
    const [result] = await pool.query(sql,[cpf, nome, fone]);
    return result
  },
  async createMantenance(id_veiculo, id_servico, data_servico, km, custo, observacoes){
    const sql = 'CALL create_new_manutenance(?,?,?,?,?,?)';
    const [result] = await pool.query(sql,[id_veiculo, id_servico, data_servico, km, custo, observacoes]);
    return result;
  },
  async createVehicle(plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano){
    const sql = 'CALL create_new_vehicle(?,?,?,?,?,?)';
    const [result] = await pool.query(sql,[plca_veiculo, id_modelo, id_proprietario,preco_veiculo, id_tipo, ano])
    return result;
  },
  async createBrand(nome_marca){
    const sql = 'CALL create_new_brand(?)';
    const [result] = await pool.query(sql,[nome_marca]);
    return result;
  },
  async createModel(nome_modelo, id_marca){
    const sql = 'CALL create_new_model(?,?)';
    const [result] = await pool.query(sql,[nome_modelo, id_marca]);
    return result;
  },
  async createService(descricao, preco){
    const sql = 'CALL create_new_service(?,?)';
    const [result] = await pool.query(sql,[descricao, preco]);
    return result;
  },
  async getAllOwners(){
    const [rows] = await pool.query('SELECT * FROM getallowners');
    return rows;
  },
  async getAllVehicles(){
    const [rows] = await pool.query('SELECT * FROM getallvehicles');
    return rows;
  },
  async getAllBrands(){
    const [rows] = await pool.query('SELECT * FROM getallbrands');
    return rows;
  },
  async getAllModels(){
    const [rows] = await pool.query('SELECT * FROM getallmodels');
    return rows;
  },
  async getAllServices(){
    const [rows] = await pool.query('SELECT * FROM getallservices');
    return rows;
  },
  async getAllMaintenances(){
    const [rows] = await pool.query('SELECT * FROM getallmaintenances');
    return rows;
  }
}