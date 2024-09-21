const express = require('express');

//
const router = express.Router();

const apiResponse = (data = {}, errors = []) => {
  const res = { data, errors };
  return res;
};

//
router.get('/posts', (req, res) => {
  const result = apiResponse([]);
  res.json(result);
});

router.get('/posts/:id', (req, res) => {
  const result = apiResponse({});
  res.json(result);
});

router.get('/tags', (req, res) => {
  const result = apiResponse([]);
  res.json(result);
});

router.get('/tags/:id', (req, res) => {
  const result = apiResponse([]);
  res.json(result);
});

//
module.exports = router;