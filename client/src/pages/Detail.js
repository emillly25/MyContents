//Library
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

//Components
import Logo from "../components/Logo";
import Loading from "../components/Loading";

//Util
import { findOne } from "../utils/reactQueryFn";

//Style
import * as S from "../style/DetailStyle";
import Rating from "@mui/material/Rating";
import UpdateDeleteModal from "../components/UpdateDeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const [isModal, setIsModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    ["content", { id }],
    () => {
      return findOne(id);
    },
    {
      select: (data) => {
        return data.data;
      },
      onSuccess: () => {
        console.log("detail페이지 잘 들어옴^^");
      },
    }
  );

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <S.MobileContainer>
        <S.BackBtnBox
          onClick={() => {
            navigate("/main");
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
        {isModal && <UpdateDeleteModal openModal={setIsModal} id={data._id} />}
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
