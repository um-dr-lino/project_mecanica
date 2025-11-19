DROP TRIGGER IF EXISTS trg_cria_usuario_proprietario;
CREATE TRIGGER trg_cria_usuario_proprietario
AFTER INSERT ON proprietario
FOR EACH ROW
BEGIN
    DECLARE usuario_existente INT;

    SELECT id_usuario INTO usuario_existente
    FROM usuario
    WHERE username = NEW.cpf;

    IF usuario_existente IS NULL THEN
        INSERT INTO usuario (username, senha, nome_completo)
        VALUES (NEW.cpf, 'alterar@123', NEW.nome);

        SET usuario_existente = LAST_INSERT_ID();
    END IF;

    INSERT INTO usuario_proprietario (id_usuario, id_proprietario)
    VALUES (usuario_existente, NEW.id_proprietario);
END;
