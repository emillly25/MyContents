import { userModel } from "../db/index";
const userController = {
  async login(req, res, next) {
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
};

export default userController;
