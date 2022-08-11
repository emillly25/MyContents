import Logo from "../components/Logo";
import ContentListItem from "../components/ContentListItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MainList({ data }) {
  const navigate = useNavigate();
  const [genreData, setGenreData] = useState(data);

  const tabChangeHandler = async (genre) => {
    if (genre === "drama") {
      const dramaData = data.filter((el) => el.genre === "drama");
      await setGenreData(dramaData);
    } else if (genre === "movie") {
      const movieData = data.filter((el) => el.genre === "movie");
      await setGenreData(movieData);
    } else if (genre === "book") {
      const bookData = data.filter((el) => el.genre === "book");
      await setGenreData(bookData);
    } else {
      await setGenreData(data);
    }
  };

  return (
    <MobileContainer>
      <Logo />
      <MenuNav>
        <MenuTab
          onClick={() => {
            tabChangeHandler("");
          }}
        >
          All
        </MenuTab>
        <MenuTab
          onClick={() => {
            tabChangeHandler("drama");
          }}
        >
          드라마
        </MenuTab>
        <MenuTab
          onClick={() => {
            tabChangeHandler("movie");
          }}
        >
          영화
        </MenuTab>
        <MenuTab
          onClick={() => {
            tabChangeHandler("book");
          }}
        >
          책
        </MenuTab>
      </MenuNav>
      <ListBox>
        {genreData.map((el) => {
          return (
            <ContentListItem
              key={Math.random()}
              genre={el.genre}
              title={el.title}
            />
          );
        })}
      </ListBox>
      <ButtonBox>
        <AddBtn
          onClick={() => {
            navigate("/create");
          }}
        >
          +
        </AddBtn>
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

const MenuNav = styled.div`
  width: 80%;
  margin: 5px auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
`;

const MenuTab = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;

  :hover {
    opacity: 0.3;
  }
`;

const ListBox = styled.ul`
  padding: 0;
  width: 80%;
  border-radius: 15px;
  border: 2px solid black;
  margin: 20px auto;
  margin-bottom: 40px;
  min-height: 500px;
  max-height: 600px;
`;

const ButtonBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
`;
const AddBtn = styled.button`
  position: absolute;
  right: 5px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  font-size: 40px;
  border-radius: 50%;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 999;
`;
export default MainList;
