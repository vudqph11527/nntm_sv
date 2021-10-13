class AccountController {
  data(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    console.log("id " + id);
    res.send({
      id: id,
      name: name,
    });
  }
  postData(req, res) {
    res.send({
      data: req.body,
      params: {
        id: req.params.id,
        name: req.params.name,
      },
    });
  }
  get(req, res) {
    const user_id = req.query.id;
    res.send({
      user_id: user_id,
    });
  }
}
module.exports = new AccountController();
