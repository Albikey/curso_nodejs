const usuariosQueries = {
  insertUsuario: `
    INSERT INTO
      usuarios(
        nombre,
        email,
        password,
        status
      )
    VALUES
      (?, ?, ?, ?)
  `,
  selectUsuarios: `
    SELECT
      *
    FROM
      usuarios
    WHERE
      status = 1
    LIMIT
      ?, ?
  `,
  updateUsuario: `
    UPDATE
      usuarios
    SET
      nombre=?,
      status=?
    WHERE
      email=?
  `,
  deleteUsuario: `
    UPDATE
      usuarios
    SET
      status=0
    WHERE
      email=?
  `,
  getUsuarioByEmail: `
    SELECT
      *
    FROM
      usuarios
    WHERE
      email=?
    AND
      status=1
  `,
};

module.exports = usuariosQueries;
