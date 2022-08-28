import styled from "styled-components";

export const MobileContainer = styled.div`
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

export const IconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
  .back {
    cursor: pointer;
    margin-right: 8px;
  }

  .modify {
    margin-right: 8px;
    cursor: pointer;
  }

  .delete {
    cursor: pointer;
    margin-right: 15px;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IndexText = styled.div`
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
