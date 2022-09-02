import * as S from "../style/DetailStyle";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Rating from "@mui/material/Rating";
import UpdateDeleteModal from "../components/UpdateDeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faArrowLeft,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import * as api from "../api";
import Loading from "../components/Loading";

function Detail({ data, onDelete, loading }) {
  const [isModal, setIsModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const foundData = data.find((el) => el._id === id);

  const deleteList = async (id) => {
    try {
      await api.delete(`/api/content/${id}`);
    } catch (err) {
      throw new Error("데이터를 삭제할 수 없습니다.");
    }
  };

  function del(id) {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteList(id);
      onDelete(id);
      navigate("/");
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <S.MobileContainer>
          <S.BackBtnBox
            onClick={() => {
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </S.BackBtnBox>
          <Logo />
          <S.IconBox
            onClick={() => {
              setIsModal(true);
            }}
          >
            <div>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </S.IconBox>
          {isModal && (
            <UpdateDeleteModal
              setIsModal={setIsModal}
              title={foundData.title}
              id={foundData._id}
              del={del}
            />
          )}
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
      )}
    </>
  );
}

export default Detail;
