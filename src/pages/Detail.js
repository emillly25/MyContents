import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
function Detail({ data, onDelete }) {
  const { title } = useParams();
  const navigate = useNavigate();
  const foundData = data.find((el) => el.title === title);

  return (
    <MobileContainer>
      <Logo />
      <IconBox>
        <div
          className="back"
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="modify">
          <FontAwesomeIcon
            icon={faPencil}
            onClick={() => {
              navigate(`/update/${foundData.title}`);
            }}
          />
        </div>
        <div className="delete">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              if (window.confirm("삭제하시겠습니까?")) {
                onDelete(foundData.id);
                navigate("/");
              }
            }}
          />
        </div>
      </IconBox>
      <TitleBox>
        <IndexText>제목:</IndexText>
        <h2>{foundData.title}</h2>
      </TitleBox>
      <SubBox>
        <div>
          <IndexText>장르:</IndexText>
          <SubText>{foundData.genre}</SubText>
        </div>
        <div>
          <IndexText>날짜:</IndexText>
          <SubText>{foundData.date}</SubText>
        </div>
      </SubBox>

      <ContentContainer>
        <ContentIndexText>MEMO</ContentIndexText>
        <ContentBox>{foundData.memo}</ContentBox>
      </ContentContainer>
      <RatingBox>
        <Rating
          name="read-only"
          value={foundData.rating}
          readOnly
          style={{ fontSize: "45px" }}
        />
      </RatingBox>
    </MobileContainer>
  );
}

const MobileContainer = styled.div`
  border: 1px solid black;
  min-width: 380px;
  max-width: 430px;
  margin: 0 auto;
`;

const IconBox = styled.div`
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

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const IndexText = styled.div`
  font-size: 18px;
  margin: 0 20px 0 50px;
`;

const SubBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
  }
`;
const SubText = styled.p`
  font-size: 18px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-20px);
`;

const ContentIndexText = styled.p`
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

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 80%;
  border-radius: 20px;
  border: 3px solid black;
  min-height: 400px;
  padding: 20px;
  line-height: 25px;
`;

const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px 0;
  margin-bottom: 20px;
`;

export default Detail;
