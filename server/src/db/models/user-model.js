import { model } from "mongoose";
import { UserSchema } from "../schemas/userSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = model("user", UserSchema);

class UserModel {
  //로그인
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
    const correctPasswordHash = user.password; //db에 저장되어 있는 암호화된 비밀번호
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 올바르지 않습니다. 다시 확인해주세요!");
    }

    //4. 로그인 성공 -> JWT 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const token = jwt.sign({ userId: user._id }, secretKey);
    return token;
  }

  //1. 회원가입 이메일 중복 여부 확인
  async checkUser(registerInfo) {
    const { email } = registerInfo;
    if (!email) {
      throw new Error("required value is not allowed to be null");
    }

    const user = await User.findOne({ email });
    if (user) {
      throw new Error("이미 사용중인 계정입니다. 다른 이메일을 입력해주세요!");
    }
    return "사용가능한 계정입니다!";
  }

  async addUser(registerInfo) {
    const { email, password } = registerInfo;
    if (!email || !password) {
      throw new Error("required value is not allowed to be null");
    }
    //이메일 중복체크는 이미 했으니까, 회원가입 바로 진행 ㄱㄱ
    //1. 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo = { email, password: hashedPassword };

    //2. db에 저장
    const createNewUser = await User.create(newUserInfo);
    return createNewUser;
  }
}

const userModel = new UserModel();
export { userModel };
