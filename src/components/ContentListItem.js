import styled from "styled-components";

function ContentListItem({ title, genre }) {
  const createLabel = (genre) => {
    if (genre === "drama") {
      return "pink";
    } else if (genre === "movie") {
      return "blue";
    } else {
      return "yellow";
    }
  };
  return (
    <List>
      <Label createLabel={createLabel(genre)} />
      <Title>{title}</Title>
    </List>
  );
}

const List = styled.li`
  box-sizing: border-box;
  list-style: none;
  padding: 20px;
  width: 100%;
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

const Label = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.createLabel};
  margin-right: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export default ContentListItem;
