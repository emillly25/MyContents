import * as S from "../style/CreateListStyle";
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
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function CreateList({ onCreate }) {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    title: "",
    genre: "",
    rating: 0,
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

  const numberChange = (e) => {
    setValue((cur) => {
      const newValue = { ...cur };
      newValue[e.target.name] = Number(e.target.value);
      return newValue;
    });
  };
  return (
    <S.MobileContainer>
      <Logo />
      <S.CreateContent>
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
        <S.SubBox>
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
              <MenuItem value={"드라마"}>드라마</MenuItem>
              <MenuItem value={"영화"}>영화</MenuItem>
              <MenuItem value={"책"}>책</MenuItem>
            </Select>
          </FormControl>
          <S.DateBox>
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
          </S.DateBox>
        </S.SubBox>
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
        <S.RatingBox>
          <Rating
            name="rating"
            value={value.rating}
            onChange={numberChange}
            style={{ fontSize: "45px" }}
          />
        </S.RatingBox>
      </S.CreateContent>
      <S.ButtonBox>
        <S.SubmitBtn
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const obj = {
              ...value,
              date: dayjs(date).format("YYYY-MM-DD"),
            };
            onCreate(obj);

            navigate("/");
          }}
        >
          저장
        </S.SubmitBtn>
      </S.ButtonBox>
    </S.MobileContainer>
  );
}

export default CreateList;
