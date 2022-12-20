const items = [{ title: "title", nickname: "admin", contents: "test message", date: "22-12-20", views: 0 }];

exports.list = (req, res) => {
  res.render("list.html", { item: items, page: "notice" });
};

exports.getWrite = (req, res) => {
  res.render("write.html", { page: "notice" });
};
