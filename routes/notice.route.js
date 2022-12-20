const express = require("express");
const router = express.Router();
const control = require("../controllers/notice.controller");

router.get("/list", control.list);

router.get("/write", control.getWrite);

router.get("/view", (req, res) => {
  res.send("/notice/view page");
});

router.get("/modify", (req, res) => {
  res.send("/notice/modify");
});

module.exports = router;
