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
  }
}