//Library
import { useNavigate } from "react-router-dom";
import { useMutation, QueryClient } from "@tanstack/react-query";

//Util
import * as api from "../api";

//Style
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

function UpdateDeleteModal({ openModal, id }) {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const mutations = useMutation((id) => {
    return api.delete(`/api/content/${id}`);
  });
  function delList(id) {
    if (window.confirm("삭제하시겠습니까?")) {
      mutations.mutate(id);
      queryClient.invalidateQueries(["content"]);
      navigate("/");
    }
  }
  return (
    <div>
      <OutsideModal
        onClick={() => {
          openModal(false);
        }}
      />
      <ModalContainer>
        <div
          className="modify"
          onClick={() => {
            navigate(`/update/${id}`);
          }}
        >
          <FontAwesomeIcon icon={faPencil} />
          <p>수정하기</p>
        </div>
        <div
          className="delete"
          onClick={() => {
            delList(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
          <p>삭제하기</p>
        </div>
      </ModalContainer>
    </div>
  );
}
const OutsideModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
  width: 142px;
  height: 100px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: absolute;
  right: 57px;
  top: 120px;

  div {
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 16px;
      margin-left: 5px;
    }
  }

  .modify {
    transform: translateY(10px);
  }
`;
export default UpdateDeleteModal;
