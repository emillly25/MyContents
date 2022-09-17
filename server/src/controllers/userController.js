import { userModel } from "../db/index";
const userController = {
  async login(req, res) {
    try {
      const userToken = await userModel.findUserByEmail({
        ...req.body,
      });

      res.status(201).json({
        isSuccess: true,
        message: "Login 성공!",
        status: 201,
        result: userToken,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async register(req, res, next) {
    try {
      const newUser = await userModel.addUser({ ...req.body });
      res.status(201).json({
        isSuccess: true,
        message: "Sign Up 성공!",
        status: 201,
        result: newUser,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async checkEmail(req, res, next) {
    try {
      const newUser = await userModel.checkUser({ ...req.body });
      res.status(201).json({
        isSuccess: true,
        message: "사용가능한 이메일 입니다!",
        status: 201,
        result: newUser,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};

export default userController;
