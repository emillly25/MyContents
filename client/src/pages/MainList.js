//Library
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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

  function tabChangeHandler(genre) {
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
          onClick={() => {
            tabChangeHandler("all");
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
