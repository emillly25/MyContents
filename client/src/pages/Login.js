//Components
import Logo from "../components/Logo";
import { useState } from "react";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Rating,
} from "@mui/material";

import styled from "styled-components";

export default function Login() {
  const [value, setValue] = useState({});
  function handleChange(e) {
    setValue((cur) => {
      const newValue = { ...cur };
      newValue[e.target.name] = e.target.value;
      return newValue;
    });
  }
  function formHandler() {
    if (!value.email) {
      return alert("이메일을 입력해주세요!");
    }
    if (!value.password) {
      return alert("비밀번호를 입력해주세요!");
    }
    //이메일 비번 일치 확인 여부 필요(서버랑)
  }
  return (
    <MobileContainer>
      <LoginTitle>Login</LoginTitle>
      <InputBox>
        <TextField
          id="outlined"
          label="이메일"
          name="email"
          type="email"
          variant="outlined"
          onChange={handleChange}
          size="normal"
          style={{
            width: "350px",
            margin: "10px auto ",
          }}
          required
        />

        <TextField
          id="outlined"
          label="비밀번호"
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
      </InputBox>
      <ButtonBox>
        <SubmitBtn
          onClick={() => {
            formHandler();
          }}
        >
          Login
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

const LoginTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  padding: 10px 0;
  margin-top: 30px;
`;

const InputBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
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
