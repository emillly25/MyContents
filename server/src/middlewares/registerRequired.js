function registerRequired(req, res, next) {
  const email = req.body.email;

  const reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (!reg.test(email)) {
    res.status(400).json({
      status: 400,
      message: "올바른 이메일 형식이 아닙니다!",
    });
    return;
  } else {
    next();
  }
}

export { registerRequired };
