const items = []

exports.list = (req,res)=> {
    res.send('list page.')
}

module.exports = {
    list:(req,res)=> {
        res.send('test')
    }
}

exports.modify = (req,res) => {
    res.send('modify page')
}
