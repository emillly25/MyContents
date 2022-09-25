//Library
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

//Components
import Logo from "../components/Logo";
import ContentListItem from "../components/ContentListItem";
import Loading from "../components/Loading";

//Util
import { getAllList } from "../utils/reactQueryFn";

//Style
import * as S from "../style/MainListStyle";

function MainList() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);
  const [genreData, setGenreData] = useState([]);
  const [activeGenre, setActiveGenre] = useState([
    { genre: "all", isActive: true },
    { genre: "드라마", isActive: false },
    { genre: "영화", isActive: false },
    { genre: "책", isActive: false },
  ]);
  const { isLoading, isError, data, error } = useQuery(
    ["content"],
    getAllList,
    {
      select: (data) => {
        return data.data;
      },
      onSuccess: (data) => {
        console.log("MainList data", data);
        setGenreData(data);
      },
    }
  );

  function isActive(genre) {
    const result = activeGenre.find((el) => el.genre === genre);
    return result.isActive;
  }

  function tabChangeHandler(genre) {
    const newActiveGenre = activeGenre.map((el) => {
      return el.genre !== genre
        ? { ...el, isActive: false }
        : { ...el, isActive: true };
    });
    setActiveGenre(newActiveGenre);
    if (genre === "all") {
      setGenreData(data);
      return;
    }
    const filteredArr = data.filter((el) => el.genre === genre);
    setGenreData(filteredArr);
  }

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <S.MobileContainer>
      <Logo />
      <S.MenuNav>
        <S.MenuTab
          activeGenre={isActive("all")}
          onClick={() => {
            tabChangeHandler("all");
            navigate("?tab=all");
          }}
        >
          All
        </S.MenuTab>
        <S.MenuTab
          activeGenre={isActive("드라마")}
          onClick={() => {
            tabChangeHandler("드라마");
            navigate("?tab=드라마");
          }}
        >
          드라마
        </S.MenuTab>
        <S.MenuTab
          activeGenre={isActive("영화")}
          onClick={() => {
            tabChangeHandler("영화");
            navigate("?tab=영화");
          }}
        >
          영화
        </S.MenuTab>
        <S.MenuTab
          activeGenre={isActive("책")}
          onClick={() => {
            tabChangeHandler("책");
            navigate("?tab=책");
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
        {genreData.map((el) => {
          return (
            <ContentListItem
              key={el._id}
              genre={el.genre}
              id={el._id}
              title={el.title}
            />
          );
        })}
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
