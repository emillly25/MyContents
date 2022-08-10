import styled from "styled-components";
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

function CreateList() {
  const [value, setValue] = useState({
    title: "",
    genre: "",
    rating: null,
    memo: "",
    date: null,
  });

  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setValue((cur) => {
      const newValue = { ...cur };
      newValue[e.target.name] = e.target.value;
      return newValue;
    });
  };
  return (
    <div>
      <Logo>My Contents 🎬 </Logo>
      <CreateContent>
        <TextField
          id="outlined"
          label="제목"
          name="title"
          onChange={handleChange}
          variant="outlined"
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
              onChange={handleChange}
            >
              <MenuItem value={"drama"}>드라마</MenuItem>
              <MenuItem value={"movie"}>영화</MenuItem>
              <MenuItem value={"book"}>책</MenuItem>
            </Select>
          </FormControl>
          <DateBox>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="날짜"
                value={date}
                onChange={(cur) => {
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
          onChange={handleChange}
          style={{
            width: "350px",
            margin: "20px auto ",
            marginBottom: "10px",
          }}
        />
        <RatingBox>
          <Rating
            name="rating"
            value={Number(value.rating)}
            onChange={handleChange}
            style={{ fontSize: "45px" }}
          />
        </RatingBox>
      </CreateContent>
      <ButtonBox>
        <SubmitBtn
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const obj = { ...value, date };
            console.log(obj);
          }}
        >
          기록하기
        </SubmitBtn>
      </ButtonBox>
    </div>
  );
}

const Logo = styled.h1`
  text-align: center;
  margin: 20px 0;
  font-size: 36px;
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

export default CreateList;
