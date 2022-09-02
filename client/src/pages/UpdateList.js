import * as S from "../style/CreateListStyle";
import axios from "axios";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import * as api from "../api";
import Loading from "../components/Loading";

function UpdateList({ onUpdate, data, loading }) {
  const { id } = useParams();
  const foundData = data.find((el) => el._id === id);
  const [value, setValue] = useState({
    _id: foundData._id,
    title: foundData.title,
    genre: foundData.genre,
    memo: foundData.memo,
    rating: foundData.rating,
  });
  const [date, setDate] = useState(foundData.date);

  const navigate = useNavigate();

  const updateList = async (obj) => {
    try {
      await api.patch(`/api/content/${id}`, obj);
      onUpdate(obj);
      navigate(`/detail/${id}`);
    } catch (err) {
      throw new Error("데이터를 수정 할 수 없습니다.");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <S.MobileContainer>
          <S.BackBtnBox
            onClick={() => {
              navigate(`/detail/${id}`);
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
            <S.SubBox>
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
              <S.DateBox>
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
              </S.DateBox>
            </S.SubBox>
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
            <S.RatingBox>
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
            </S.RatingBox>
          </S.CreateContent>
          <S.ButtonBox>
            <S.SubmitBtn
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (window.confirm("수정하시겠습니까?")) {
                  const newObj = {
                    ...value,
                    date: dayjs(date).format("YYYY-MM-DD"),
                  };
                  console.log("수정obj", newObj);
                  updateList(newObj);
                }
              }}
            >
              수정하기
            </S.SubmitBtn>
          </S.ButtonBox>
        </S.MobileContainer>
      )}
    </>
  );
}

export default UpdateList;
