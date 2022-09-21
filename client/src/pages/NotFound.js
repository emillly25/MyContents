import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function NotFonud() {
  const navigate = useNavigate();
  return (
    <MobileContainer>
      <h1>404 Not Found</h1>
      <a
        onClick={() => {
          navigate("https://my-content00.herokuapp.com/main");
        }}
      >
        Go Back to Home
      </a>
    </MobileContainer>
  );
}

const MobileContainer = styled.div`
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 56px;
  }
  a {
    font-size: 28px;
    cursor: pointer;
    border-bottom: 2px solid black;

    :active {
      color: lightgray;
    }
  }
`;

export default NotFonud;
