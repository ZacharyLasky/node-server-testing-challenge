const db = require('./db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db('users').select('id', 'username', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users')
  .insert(user);
  return findById(id);
}

async function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function remove(id) {
  return db("users")
  .where({ id })
  .delete()
}
