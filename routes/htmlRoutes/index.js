const path = require('path');
const router = require('express').Router();

// Get route for notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Get route for index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Get route for all other end points
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;