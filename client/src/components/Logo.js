import styled from "styled-components";

function Logo() {
  return (
    <>
      <LogoText>My Content 🎬</LogoText>
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
