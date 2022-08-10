import CreateList from "./pages/CreateList";
import styled from "styled-components";
import HelmetComponent from "./components/HelmetComponent";

function App() {
  return (
    <>
      <HelmetComponent />
      <MobileContainer>
        <CreateList></CreateList>
      </MobileContainer>
    </>
  );
}

const MobileContainer = styled.div`
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
  font-family: "Oleo Script Swash Caps", cursive;
`;

export default App;
