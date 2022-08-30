import styled from "styled-components";

export const MobileContainer = styled.div`
  position: relative;
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

export const IconBox = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 30px;

  div {
    position: absolute;
    top: 15px;
    right: 50px;
  }
`;

export const BackBtnBox = styled.a`
  cursor: pointer;
  font-size: 36px;
  position: absolute;
  left: 15px;
  top: 7px;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    width: 250px;
    line-height: 20px;
  }
`;

export const IndexText = styled.div`
  width: 40px;
  font-size: 18px;
  margin: 0 20px 0 50px;
`;

export const SubBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
  }
`;
export const SubText = styled.p`
  font-size: 18px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-20px);
`;

export const ContentIndexText = styled.p`
  font-size: 22px;
  text-align: center;
  width: 80px;
  padding: 5px;
  font-weight: bold;
  margin-bottom: -15px;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
`;

export const ContentBox = styled.div`
  box-sizing: border-box;
  width: 80%;
  border-radius: 20px;
  border: 3px solid black;
  min-height: 400px;
  padding: 20px;
  line-height: 25px;
  white-space: pre-wrap;
`;

export const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px 0;
  margin-bottom: 20px;
`;
