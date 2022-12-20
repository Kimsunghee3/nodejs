const items = [{ title: "title", nickname: "admin", contents: "test message", date: "22-12-20", views: 0 }];

exports.list = (req, res) => {
  res.render("list.html", { items, page: "notice" });
};

exports.getWrite = (req, res) => {
  res.render("write.html", { page: "notice" });
};

exports.postWrite = (req, res) => {
  const { title, nickname, contents } = req.body;
  items.push({ title, nickname, contents, date: "22-12-20", views: 0 });
  res.redirect(`/notice/view?index=${items.length - 1}`);
};

exports.view = (req, res) => {
  const { index } = req.query;
  const item = {
    ...items[index],
    index,
  };
  res.render("view.html", { item, page: "notice" });
};

exports.getModify = (req, res) => {
  const { index } = req.query;
  const item = {
    ...items[index],
    index,
  };
  res.render("modify.html", { item, page: "notice" });
};

exports.postModify = (req, res) => {
  const { index, title, nickname, contents } = req.body;
  items[index].title = title;
  items[index].nickname = nickname;
  items[index].contents = contents;
  res.redirect(`/notice/view?index=${index}`);
};

exports.delete = (req, res) => {
  const { index } = req.query;
  items.splice(index, 1);
  res.redirect(`/notice/list`);
};
