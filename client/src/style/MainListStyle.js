import styled from "styled-components";

export const MobileContainer = styled.div`
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

export const MenuNav = styled.div`
  width: 80%;
  margin: 5px auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
`;

export const MenuTab = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  color: ${({ activeGenre }) => (activeGenre ? "red" : "black")};
  font-weight: ${({ activeGenre }) => (activeGenre ? "bold" : "500")};
  :hover {
    opacity: 0.3;
  }
`;

export const ListBox = styled.ul`
  padding: 0;
  width: 80%;
  border-radius: 15px;
  border: 2px solid black;
  margin: 20px auto;
  margin-bottom: 40px;
  min-height: 500px;
  max-height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: ${({ isScroll }) => (isScroll ? "6px" : "0")};
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 15px;
    box-shadow: inset 0px 0px 5px white;
  }
  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }
`;

export const ButtonBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
`;
export const AddBtn = styled.button`
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
