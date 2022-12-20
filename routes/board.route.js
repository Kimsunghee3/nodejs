const expresss = require('express')
const router = expresss.Router()
const controller = require("../controllers/board.controller")

router.get("/list", page)

module.exports = router