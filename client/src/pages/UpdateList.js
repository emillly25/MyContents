//Library
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

//Components
import Logo from "../components/Logo";
import Loading from "../components/Loading";

//Util
import * as api from "../api";
import { findOne } from "../utils/reactQueryFn";
import { updateOne } from "../utils/reactQueryFn";

//Style
import * as S from "../style/CreateListStyle";
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

function UpdateList() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(
    ["detail"],
    () => {
      return findOne(id);
    },
    {
      select: (data) => {
        return data.data;
      },
    }
  );

  const [value, setValue] = useState({
    _id: data._id,
    title: data.title,
    genre: data.genre,
    memo: data.memo,
    rating: data.rating,
  });
  const [date, setDate] = useState(data.date);
  // const mutations = useMutation(
  //   (updateContent) => {
  //     return api.patch(`/api/content/${id}`, updateContent);
  //   },
  //   {
  //     onMutate: (val) => {
  //       console.log("val", val);
  //     },
  //   }
  // );
  const mutations = useMutation(updateOne, {
    onMutate: (value) => {
      console.log("value", value);
    },
  });

  function handleChange(e) {
    setValue((cur) => {
      const newValue = { ...cur };
      if (e.target.name === "rating") {
        newValue[e.target.name] = Number(e.target.value);
        return newValue;
      }
      newValue[e.target.name] = e.target.value;
      return newValue;
    });
  }

  function formValidation() {
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

    if (window.confirm("수정하시겠습니까?")) {
      const updateContentObj = {
        ...value,
        date: dayjs(date).format("YYYY-MM-DD"),
      };
      //when submitbutn triggers,
      mutations.mutate(updateContentObj, id);
      navigate(`/detail/${id}`);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    formValidation();
  }

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
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
            onChange={handleChange}
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
              onChange={handleChange}
              style={{ fontSize: "45px" }}
            />
          </S.RatingBox>
        </S.CreateContent>
        <S.ButtonBox>
          <S.SubmitBtn type="submit" onClick={submitHandler}>
            수정하기
          </S.SubmitBtn>
        </S.ButtonBox>
      </S.MobileContainer>
    </>
  );
}

export default UpdateList;
