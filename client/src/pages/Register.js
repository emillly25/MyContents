import styled from "styled-components";
import * as api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  const [isCheckedEmail, setIsCheckedEmail] = useState(false);
  function handleChange(e) {
    setValue((cur) => {
      const newValue = { ...cur };
      newValue[e.target.name] = e.target.value;
      return newValue;
    });
  }

  async function formHandler() {
    if (!value.email) {
      return alert("이메일을 입력해주세요!");
    }
    if (!isCheckedEmail) {
      return alert("이메일 사용가능 여부를 체크해주세요!");
    }
    if (!value.password) {
      return alert("비밀번호를 입력해주세요!");
    }
    if (!value.passwordCheck) {
      return alert("비밀번호 확인을 입력해주세요!");
    }

    if (value.password.length < 4) {
      return alert("비밀번호는 4자리 이상으로 설정해주세요!");
    }
    if (value.password !== value.passwordCheck) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    await registerHandler(); //회원가입 요청
    loginHandler(); //회원가입 성공시 자동 로그인
  }
  async function checkEmail() {
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!reg.test(value.email)) {
      return alert("올바른 이메일 형식이 아닙니다!");
    }
    try {
      await api.post("/register/checkEmail", {
        email: value.email,
      });
      alert("사용가능한 이메일 입니다!");
      setIsCheckedEmail(true);
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  async function registerHandler() {
    try {
      await api.post("/register", {
        email: value.email,
        password: value.password,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  async function loginHandler() {
    try {
      const res = await api.post("/login", {
        email: value.email,
        password: value.password,
      });
      const token = res.data.result;
      sessionStorage.setItem("token", token);
      navigate("/main");
    } catch (error) {
      return alert(error.message);
    }
  }
  return (
    <MobileContainer>
      <Title>Register</Title>
      <InputBox>
        <EmailBox>
          <TextField
            id="outlined"
            label="이메일"
            name="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            size="normal"
            style={{
              width: "270px",
              margin: "10px auto ",
            }}
            required
          />
          <EmailCheckBtn
            onClick={() => {
              checkEmail();
            }}
          >
            Check
          </EmailCheckBtn>
        </EmailBox>
        <TextField
          id="outlined"
          label="비밀번호 (4자리 이상)"
          name="password"
          type="password"
          variant="outlined"
          size="normal"
          onChange={handleChange}
          style={{
            width: "350px",
            margin: "10px auto ",
          }}
          required
        />
        <TextField
          id="outlined"
          label="비밀번호 확인"
          name="passwordCheck"
          type="password"
          variant="outlined"
          size="normal"
          onChange={handleChange}
          style={{
            width: "350px",
            margin: "10px auto ",
          }}
          required
        />
      </InputBox>
      <ButtonBox>
        <SubmitBtn
          onClick={() => {
            formHandler();
          }}
        >
          Sign Up
        </SubmitBtn>
      </ButtonBox>
    </MobileContainer>
  );
}

const MobileContainer = styled.div`
  position: relative;
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  padding: 10px 0;
  margin-top: 30px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 20px;
`;
const SubmitBtn = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const EmailCheckBtn = styled(SubmitBtn)`
  width: 65px;
  height: 50px;
  font-size: 14px;
  border-radius: 5px;
`;
