import styled from "styled-components";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function Register() {
  const [value, setValue] = useState({});
  function handleChange(e) {
    setValue((cur) => {
      const newValue = { ...cur };
      newValue[e.target.name] = e.target.value;
      return newValue;
    });
  }

  function formHandler() {
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!value.email) {
      return alert("이메일을 입력해주세요!");
    }
    if (!value.password) {
      return alert("비밀번호를 입력해주세요!");
    }
    if (!value.passwordCheck) {
      return alert("비밀번호 확인을 입력해주세요!");
    }
    if (!reg.test(value.email)) {
      return alert("올바른 이메일 형식이 아닙니다!");
    }

    if (value.password.length < 4) {
      return alert("비밀번호는 4자리 이상으로 설정해주세요!");
    }
    if (value.password !== value.passwordCheck) {
      return alert("비밀번호가 일치하지 않습니다.");
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
          <EmailCheckBtn>Check</EmailCheckBtn>
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