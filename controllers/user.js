const { getDb } = require('../db/connect');

// Get full user(s)
const getUser = async (req, res) => {
  try {
    const db = getDb();
    const users = await db.collection('user').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Get only usernames
const getUsername = async (req, res) => {
  try {
    const db = getDb();
    const users = await db.collection('user')
      .find({}, { projection: { username: 1, _id: 0 } })
      .toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch username' });
  }
};

module.exports = { getUser, getUsername };