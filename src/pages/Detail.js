import * as S from "../style/DetailStyle";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Detail({ data, onDelete }) {
  const { title } = useParams();
  const navigate = useNavigate();
  const foundData = data.find((el) => el.title === title);

  const deleteList = async (id) => {
    await axios.delete(`http://localhost:3004/contents/${id}`);
  };

  return (
    <S.MobileContainer>
      <Logo />
      <S.IconBox>
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
                deleteList(foundData.id);
                onDelete(foundData.id);
                navigate("/");
              }
            }}
          />
        </div>
      </S.IconBox>
      <S.TitleBox>
        <S.IndexText>제목:</S.IndexText>
        <h2>{foundData.title}</h2>
      </S.TitleBox>
      <S.SubBox>
        <div>
          <S.IndexText>장르:</S.IndexText>
          <S.SubText>{foundData.genre}</S.SubText>
        </div>
        <div>
          <S.IndexText>날짜:</S.IndexText>
          <S.SubText>{foundData.date}</S.SubText>
        </div>
      </S.SubBox>

      <S.ContentContainer>
        <S.ContentIndexText>MEMO</S.ContentIndexText>
        <S.ContentBox>{foundData.memo}</S.ContentBox>
      </S.ContentContainer>
      <S.RatingBox>
        <Rating
          name="read-only"
          value={foundData.rating}
          readOnly
          style={{ fontSize: "45px" }}
        />
      </S.RatingBox>
    </S.MobileContainer>
  );
}

export default Detail;
