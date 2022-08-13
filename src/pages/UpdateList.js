import styled from "styled-components";
import Logo from "../components/Logo";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Rating,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

function UpdateList({ onUpdate, data }) {
  const { title } = useParams();
  const foundData = data.find((el) => el.title === title);
  const [value, setValue] = useState({
    id: foundData.id,
    title: foundData.title,
    genre: foundData.genre,
    memo: foundData.memo,
    rating: foundData.rating,
  });
  const [date, setDate] = useState(foundData.date);

  const navigate = useNavigate();

  return (
    <MobileContainer>
      <Logo />
      <CreateContent>
        <TextField
          id="outlined"
          label="제목"
          name="title"
          variant="outlined"
          value={value.title}
          onChange={(e) => {
            setValue((cur) => {
              const newValue = { ...cur, title: e.target.value };
              return newValue;
            });
          }}
          size="normal"
          style={{
            width: "350px",
            margin: "20px auto ",
          }}
        />
        <SubBox>
          <FormControl style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">장르</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="genre"
              name="genre"
              value={value.genre}
              onChange={(e) => {
                setValue((cur) => {
                  const newValue = { ...cur, genre: e.target.value };
                  return newValue;
                });
              }}
            >
              <MenuItem value={"드라마"}>드라마</MenuItem>
              <MenuItem value={"영화"}>영화</MenuItem>
              <MenuItem value={"책"}>책</MenuItem>
            </Select>
          </FormControl>
          <DateBox>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="날짜"
                value={date} //date : 변환된 string
                onChange={(cur) => {
                  //cur: 진짜 date형식
                  setDate(cur);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </DateBox>
        </SubBox>
        <TextField
          id="outlined-multiline-flexible"
          label="나만의 감상평 남기기"
          name="memo"
          multiline
          minRows={8}
          value={value.memo}
          onChange={(e) => {
            setValue((cur) => {
              const newValue = { ...cur, memo: e.target.value };
              return newValue;
            });
          }}
          style={{
            width: "350px",
            margin: "20px auto ",
            marginBottom: "10px",
          }}
        />
        <RatingBox>
          <Rating
            name="rating"
            value={value.rating}
            onChange={(e) => {
              setValue((cur) => {
                const newValue = { ...cur, rating: Number(e.target.value) };
                return newValue;
              });
            }}
            style={{ fontSize: "45px" }}
          />
        </RatingBox>
      </CreateContent>
      <ButtonBox>
        <SubmitBtn
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm("수정하시겠습니까?")) {
              const newObj = {
                ...value,
                date: dayjs(date).format("YYYY-MM-DD"),
              };
              onUpdate(newObj);
              navigate("/");
            }
          }}
        >
          수정하기
        </SubmitBtn>
      </ButtonBox>
    </MobileContainer>
  );
}

const MobileContainer = styled.div`
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

const CreateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: flex-start;
`;

const SubBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`;
const DateBox = styled.div`
  width: 150px;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 30px;
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

export default UpdateList;
