import Logo from "../components/Logo";
import ContentListItem from "../components/ContentListItem";
import Loading from "../components/Loading";
import * as S from "../style/MainListStyle";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function MainList({ data, loading }) {
  const navigate = useNavigate();

  const [genreData, setGenreData] = useState([]);
  const [isScroll, setIsScroll] = useState(false);

  const tabChangeHandler = async (genre) => {
    if (genre === "드라마") {
      const dramaData = data.filter((el) => el.genre === "드라마");
      await setGenreData(dramaData);
      navigate("?genre=드라마");
    } else if (genre === "영화") {
      const movieData = data.filter((el) => el.genre === "영화");
      await setGenreData(movieData);
      navigate("?genre=영화");
    } else if (genre === "책") {
      const bookData = data.filter((el) => el.genre === "책");
      await setGenreData(bookData);
      navigate("?genre=책");
    } else {
      await setGenreData(data);
      navigate("/");
    }
  };

  return (
    <S.MobileContainer>
      <Logo />
      <S.MenuNav>
        <S.MenuTab
          onClick={() => {
            tabChangeHandler("");
          }}
        >
          All
        </S.MenuTab>
        <S.MenuTab
          onClick={() => {
            tabChangeHandler("드라마");
          }}
        >
          드라마
        </S.MenuTab>
        <S.MenuTab
          onClick={() => {
            tabChangeHandler("영화");
          }}
        >
          영화
        </S.MenuTab>
        <S.MenuTab
          onClick={() => {
            tabChangeHandler("책");
          }}
        >
          책
        </S.MenuTab>
      </S.MenuNav>
      <S.ListBox
        onScroll={(e) => {
          setIsScroll(true);
          if (e.target.scrollTop === 0) {
            setIsScroll(false);
          }
        }}
        isScroll={isScroll}
      >
        {loading ? (
          <Loading />
        ) : genreData.length === 0 ? (
          data.map((el) => {
            return (
              <ContentListItem
                key={el._id}
                genre={el.genre}
                id={el._id}
                title={el.title}
              />
            );
          })
        ) : (
          genreData.map((el) => {
            return (
              <ContentListItem
                key={el._id}
                genre={el.genre}
                id={el._id}
                title={el.title}
              />
            );
          })
        )}
      </S.ListBox>
      <S.ButtonBox>
        <S.AddBtn
          onClick={() => {
            navigate("/create");
          }}
        >
          +
        </S.AddBtn>
      </S.ButtonBox>
    </S.MobileContainer>
  );
}

export default MainList;
