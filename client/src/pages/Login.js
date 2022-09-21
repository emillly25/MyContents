import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api";

import { TextField } from "@mui/material";

import styled from "styled-components";

export default function Login() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
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
    if (!value.password) {
      return alert("비밀번호를 입력해주세요!");
    }
    //이메일 비번 일치 확인 여부 필요(서버랑)
    try {
      const res = await api.post("/login", value);
      const token = res.data.result;
      sessionStorage.setItem("token", token);
      navigate("https://my-content00.herokuapp.com/main");
    } catch (error) {
      return alert(error.response.data.error);
    }
  }
  return (
    <MobileContainer>
      <Title>Login</Title>
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
      <TextBox>
        <Text>계정이 없으신가요?</Text>
        <Link
          onClick={() => {
            navigate("https://my-content00.herokuapp.com/register");
          }}
        >
          register
        </Link>
      </TextBox>
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
  letter-spacing: 2px;
  padding: 10px 0;
  margin-top: 30px;
  font-family: "Oleo Script Swash Caps", cursive;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
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

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
const Text = styled.p`
  color: black;
  font-size: 12px;
`;

const Link = styled.a`
  display: inline-block;
  color: gray;
  cursor: pointer;
  font-size: 12px;
  :hover {
    opacity: 0.5;
    border-bottom: 1px solid gray;
  }
`;
