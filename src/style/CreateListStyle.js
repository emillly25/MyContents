import styled from "styled-components";

export const MobileContainer = styled.div`
  position: relative;
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

export const BackBtnBox = styled.a`
  cursor: pointer;
  font-size: 36px;
  position: absolute;
  left: 15px;
  top: 7px;
`;

export const CreateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: flex-start;
`;

export const SubBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`;
export const DateBox = styled.div`
  width: 150px;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;
export const SubmitBtn = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: black;
  color: white;
  cursor: pointer;
`;
