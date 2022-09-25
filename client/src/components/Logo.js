import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <LogoText
        onClick={() => {
          navigate("/");
        }}
      >
        My Content 🎬
      </LogoText>
    </>
  );
}
const LogoText = styled.h1`
  text-align: center;
  margin: 20px 0;
  font-size: 36px;
  font-family: "Oleo Script Swash Caps", cursive;
  cursor: pointer;
`;

export default Logo;
