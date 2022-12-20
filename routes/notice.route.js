const express = require("express");
const router = express.Router();
const control = require("../controllers/notice.controller");

router.get("/list", control.list);

router.get("/write", control.getWrite);

router.post("/write", control.postWrite);

router.get("/view", control.view);

router.get("/modify", control.getModify);

router.post("/modify", control.postModify);

router.get("/delete", control.delete);

module.exports = router;
