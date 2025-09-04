function getData(req, res) {
  const data = 'Some data';

  res.status(200).send(data); // send JSON back to the client
}

// Export the function so routes can use it
module.exports = { getData };