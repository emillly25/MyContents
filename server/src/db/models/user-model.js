import { model } from "mongoose";
import { UserSchema } from "../schemas/userSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = model("user", UserSchema);

class UserModel {
  async findUserByEmail(loginInfo) {
    const { email, password } = loginInfo;

    //1. 프론트에서 넘어온 정보에 빠진건 없는지 체크
    if (!email || !password) {
      throw new Error("required value is not allowed to be null");
    }
    //2. 받아온 정보 중 이메일로 유저 찾기
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("존재하지 않는 이메일 입니다. 다시 확인해주세요!");
    }

    //3. 이메일이 존재하면 비밀번호 확인
    // const correctPasswordHash = user.password; //db에 저장되어 있는 암호화된 비밀번호
    // const isPasswordCorrect = await bcrypt.compare(
    //   password,
    //   correctPasswordHash
    // );
    // if (!isPasswordCorrect) {
    //   throw new Error("비밀번호가 올바르지 않습니다. 다시 확인해주세요!");
    // }
    if (user.password !== password) {
      throw new Error("비밀번호가 올바르지 않습니다. 다시 확인해주세요!");
    }

    //4. 로그인 성공 -> JWT 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const token = jwt.sign({ userId: user._id }, secretKey);
    return token;
  }
}

const userModel = new UserModel();
export { userModel };
