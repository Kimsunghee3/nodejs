const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.send("/notice/list page");
});

router.get("/write", (req, res) => {
  res.send("/notice/write page");
});

router.get("/view", (req, res) => {
  res.send("/notice/view page");
});

router.get("/modify", (req, res) => {
  res.send("/notice/modify");
});

module.exports = router;
