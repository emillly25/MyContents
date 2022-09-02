import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ContentListItem({ id, genre, title }) {
  const navigate = useNavigate();
  const createLabel = (genre) => {
    if (genre === "드라마") {
      return "pink";
    } else if (genre === "영화") {
      return "blue";
    } else {
      return "yellow";
    }
  };
  return (
    <List
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
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
  width: 100%;
  padding-right: 5px;
  font-size: 18px;
  margin: 0;
  line-height: 20px; ;
`;

export default ContentListItem;
