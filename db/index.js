const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgres://localhost/medsql");

const getUsers = async () => {
  return (await client.query('SELECT * FROM users')).rows;
}

const getUser = async (id) => {
  return (await client.query('SELECT * FROM users WHERE id=$1', [id])).rows[0];
}

const getUserMeds = async (id) => {
  const sql = `SELECT medicine.med_name, medicine.dose FROM users
  INNER JOIN user_medicine ON users.id=user_medicine.user_id
  INNER JOIN medicine ON medicine.id=user_medicine.med_id WHERE users.id=$1`

  return (await client.query(sql, [id])).rows;
}

const createUser = async ({name, age}) => {
  return (await client.query('INSERT INTO users(name, age) VALUES($1, $2) RETURNING *', [name, age])).rows[0]
}

const createMedForUser = async ({med_name, dose}, uid) => {
  console.log("CREATING")
  console.log(med_name, dose, uid)

  const {rows} = await client.query('INSERT INTO medicine(med_name, dose) VALUES($1, $2) RETURNING *', [med_name, dose]);
  await client.query('INSERT INTO user_medicine(user_id, med_id) VALUES ($1,$2)', [uid, rows[0].id])

  console.log(rows[0])
};

const deleteUser = async (id) => {
  await client.query("DELETE FROM user_medicine WHERE user_id=$1", [id])
  await client.query("DELETE FROM users WHERE id=$1", [id]);

};


module.exports = {
  client,
  getUsers,
  getUser,
  getUserMeds,
  createUser,
  createMedForUser,
  deleteUser
};
