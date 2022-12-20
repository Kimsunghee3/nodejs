const items = {title: str, nickname: str, conmtents: str, date : str, view: str}

exports.list = (req,res) => {
    console.log(req.login)
    res.send('list.page.')
}

module.exports = {
    list:(req,res)=> {
        res.send('asdf')
    }
}

exports.modify = (req,res) => {
    res.send("modify page")
}