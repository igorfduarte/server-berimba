const db = require('../db/db');

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].email == email && db.users[i].password == password) {
      res.json({
        message: 'login feito com sucesso',
        user: db.users[i],
      });
      next();
    }
  }

  res.json({
    message: 'Usuario nao encontrado',
  });
  console.log(email,password)
  next();
};

exports.getUser = async (req, res, next) => {
  const id = req.params.id;

  for (let i = 0; i < db.users.length; i++) {
    if (i == id) {
      res.json({
        message: 'Usuario encontrado com sucesso',
        user: db.users[i],
      });
      next();
    }
  }

  res.json({
    message: 'Usuario nao encontrado',
  });
  next();
};

exports.updateUser = (req, res, next) => {
  const userId = req.params.id;

  const { name, email, password } = req.body;

  const usuario = db.users[userId];

  if (!usuario) {
    res.json({
      message: 'Usuario nao encontrado',
    });

    next();

    return;
  }

  usuario.name = name || usuario.name;
  usuario.email = email || usuario.email;
  usuario.password = password || usuario.password;
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;

  const usuario = db.users[userId];

  if (!usuario) {
    res.json({
      message: 'Usuario nao encontrado',
    });

    next();

    return;
  }

  usuario.delete();

  usuario = {};
};
