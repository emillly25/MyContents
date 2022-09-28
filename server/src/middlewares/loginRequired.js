import jwt from "jsonwebtoken";

function loginRequired(req, res, next) {
  // req 헤더로부터 authorization 토큰을 받음.
  const userToken = req.headers.authorization;

  // 이 토큰은 jwt 토큰 문자열이거나, "null" 문자열이거나, undefined임.
  // 토큰이 "null" 일 경우, login_required 가 서비스 사용제한.

  if (!userToken || userToken === "null") {
    console.log("서비스 사용 요청이 있습니다.하지만, Authorization 토큰: 없음");
    res.status(401).json({
      status: 401,
      result: "forbidden-approach",
      reason: "로그인한 유저만 사용할 수 있는 서비스입니다.",
    });

    return;
  }

  // 토큰이 있으면, 그 토큰이 정상적인 토큰인지 확인
  try {
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const jwtDecoded = jwt.verify(userToken, secretKey);
    const userId = jwtDecoded.userId;

    // req.currentUserId를 통해 유저의 id에 접근 가능하게 됨
    req.currentUserId = userId;

    next();
  } catch (error) {
    // jwt.verify 함수가 에러를 발생시키는 경우는 토큰이 정상적으로 decode 안되었을 경우임.
    // 401 코드로 JSON 형태로 프론트에 전달함.
    res.status(401).json({
      status: 401,
      result: "forbidden-approach",
      reason: "정상적인 토큰이 아닙니다.",
    });

    return;
  }
}

export { loginRequired };
