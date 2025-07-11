const pool = require('../db');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (user.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    if (updatedUser.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    if (deletedUser.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted', user: deletedUser.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

