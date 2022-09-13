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
import * as api from "../api";
import Loading from "../components/Loading";
import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";

function Detail() {
  const [isModal, setIsModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const { isLoading, isError, data, error } = useQuery(["detail"], findOne, {
    select: (data) => {
      return data.data;
    },
  });
  function findOne() {
    return api.get(`/${id}`);
  }

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
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
        {isModal && <UpdateDeleteModal setIsModal={setIsModal} id={data._id} />}
        <S.TitleBox>
          <S.IndexText>제목:</S.IndexText>
          <h2>{data.title}</h2>
        </S.TitleBox>
        <S.SubBox>
          <div>
            <S.IndexText>장르:</S.IndexText>
            <S.SubText>{data.genre}</S.SubText>
          </div>
          <div>
            <S.IndexText>날짜:</S.IndexText>
            <S.SubText>{data.date}</S.SubText>
          </div>
        </S.SubBox>

        <S.ContentContainer>
          <S.ContentIndexText>MEMO</S.ContentIndexText>
          <S.ContentBox>{data.memo}</S.ContentBox>
        </S.ContentContainer>
        <S.RatingBox>
          <Rating
            name="read-only"
            value={data.rating || 0}
            readOnly
            style={{ fontSize: "45px" }}
          />
        </S.RatingBox>
      </S.MobileContainer>
    </>
  );
}

export default Detail;
