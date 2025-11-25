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
  },
  async deleteUser(id){
    const sql = 'CALL delete_user(?)';
    const [result] = await pool.query(sql,[id]);
    return result;
  },
  async deleteOwner(id){
    const sql = 'CALL delete_owner(?)';
    const [result] = await pool.query(sql,[id]);
    return result;
  },
  async deleteVehicle(id){
    const sql = 'CALL delete_vehicle(?)';
    const [result] = await pool.query(sql,[id]);
    return result;  
  },  
  async deleteBrand(id){
    const sql = 'CALL delete_brand(?)';
    const [result] = await pool.query(sql,[id]);
    return result;
  },
  async deleteModel(id){
    const sql = 'CALL delete_model(?)';
    const [result] = await pool.query(sql,[id]);
    return result;
  },
  async deleteService(id){
    const sql = 'CALL delete_service(?)';
    const [result] = await pool.query(sql,[id]);
    return result;
  },
  async deleteMaintenance(id){
    const sql = 'CALL delete_maintenance(?)';
    const [result] = await pool.query(sql,[id]);
    return result;
  },
  async updateUser(id, dados) {
    const sql = "CALL update_user(?, ?, ?, ?)";
    const params = [
        id,
        dados.username || null,
        dados.senha || null,
        dados.nome_completo || null
    ];

    const [result] = await pool.query(sql, params);
    return result;
  },
  async updateOwner(id, dados) {
    const sql = "CALL update_owner(?, ?, ?)";
    const params = [
        id,
        dados.cpf || null,
        dados.nome || null,
        dados.fone || null
    ];
    const [result] = await pool.query(sql, params);
    return result;
  },
  async updateVehicle(id, dados) {
    const sql = "CALL update_vehicle(?, ?, ?, ?, ?, ?, ?)";
    const params = [
        id,
        dados.plca_veiculo || null,
        dados.id_modelo || null,
        dados.id_proprietario || null,
        dados.preco_veiculo || null,
        dados.id_tipo || null,
        dados.ano || null
    ];
    const [result] = await pool.query(sql, params);
    return result;
  },
  async updateBrand(id, dados) {
    const sql = "CALL update_brand(?, ?)";
    const params = [
        id,
        dados.nome_marca || null
    ];
    const [result] = await pool.query(sql, params);
    return result;
  },
  async updateModel(id, dados) {
    const sql = "CALL update_model(?, ?, ?)";
    const params = [
        id,
        dados.nome_modelo || null,
        dados.id_marca || null
    ];
    const [result] = await pool.query(sql, params);
    return result;
  },
  async updateService(id, dados) {
    const sql = "CALL update_service(?, ?, ?)";
    const params = [
        id,
        dados.descricao || null,
        dados.preco || null
    ];
    const [result] = await pool.query(sql, params);
    return result;
  },
  async updateMaintenance(id, dados) {
    const sql = "CALL update_maintenance(?, ?, ?, ?, ?, ?, ?)";   
    const params = [
        id,
        dados.id_veiculo || null,
        dados.id_servico || null,
        dados.data_servico || null,
        dados.km || null,
        dados.custo || null,
        dados.observacoes || null
    ];
    const [result] = await pool.query(sql, params);
    return result;
  }
}