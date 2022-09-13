import * as S from "../style/CreateListStyle";
import Logo from "../components/Logo";
import * as api from "../api";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "../components/Loading";

function CreateList() {
  const navigate = useNavigate();
  const mutations = useMutation((newContent) => {
    return api.post("/api/content", newContent);
  });
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

  const formValidation = () => {
    if (value.title.length === 0) {
      return alert("제목을 입력해주세요");
    }
    if (value.genre.length === 0) {
      return alert("장르를 입력해주세요");
    }
    if (!date) {
      return alert("날짜를 입력해주세요");
    }
    if (value.memo.length === 0) {
      return alert("내용을 입력해주세요");
    }
    if (value.rating === 0) {
      return alert("평점을 입력해주세요");
    }

    const obj = {
      ...value,
      date: dayjs(date).format("YYYY-MM-DD"),
    };

    mutations.mutate(obj); //DB로 POST
    navigate("/");
  };

  return (
    <>
      {mutations.isLoading ? (
        <Loading />
      ) : (
        <S.MobileContainer>
          <S.BackBtnBox
            onClick={() => {
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </S.BackBtnBox>
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
                formValidation();
              }}
            >
              저장
            </S.SubmitBtn>
          </S.ButtonBox>
        </S.MobileContainer>
      )}
    </>
  );
}

export default CreateList;
