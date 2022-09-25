//library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

//Components
import Logo from "../components/Logo";
import Loading from "../components/Loading";

//Util
import { postOne } from "../utils/reactQueryFn";

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

function CreateList() {
  const queryClient = useQueryClient();
  const [date, setDate] = useState(null);
  const [value, setValue] = useState({
    title: "",
    genre: "",
    rating: 0,
    memo: "",
    date: null,
  });

  const navigate = useNavigate();
  const postMutation = useMutation((newContent) => postOne(newContent), {
    onMutate: () => {
      console.log("create중입니다! ");
    },
    onSuccess: () => {
      console.log("create 성공! ");
      queryClient.invalidateQueries(["content"]);
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

    const newContentObj = {
      ...value,
      date: dayjs(date).format("YYYY-MM-DD"),
    };

    //DB로 POST
    postMutation.mutate(newContentObj);
    navigate("/main"); //홈으로 이동하면 ['content']가 다시 refetching 되므로 자동 업데이트
  }

  if (postMutation.isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (postMutation.isError) {
    return <h1>Error: fail to create post!${error.message}</h1>;
  }

  return (
    <>
      <S.MobileContainer>
        <S.BackBtnBox
          onClick={() => {
            navigate("/main");
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
              onChange={handleChange}
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
    </>
  );
}

export default CreateList;
