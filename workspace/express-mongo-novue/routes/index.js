const express = require('express');
const User = require('../schemas/user');  // 데이터를 담는 설계 및 구조

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});  // 비순차적인 것을 순차적으로 담기 위함
    res.render('mongoose', { users });  // views의 mongoose.html로 감
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
