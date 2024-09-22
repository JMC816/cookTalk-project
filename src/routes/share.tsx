import { useState } from "react";
import styled from "styled-components";
import UploadModal from "../components/upload_modal";
import Timeline from "../components/timeline";

const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: auto;
`;

const ShareBar = styled.div`
  background-color: darkorange;
  width: 400px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 5px 5px -5px;
`;

const UploadTitle = styled.div`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  background-color: #fff;
  padding: 0 10px;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
    pointer-events: none;
  }
`;

export default function Share() {
  const [modal, setModal] = useState(true);
  const modalOpenClick = () => {
    setModal((prev) => !prev);
  };
  return (
    <UploadModal setModal={setModal} modal={modal}>
      <ShareWrapper>
        <ShareBar>
          <UploadTitle onClick={modalOpenClick}>
            <span>게시물 업로드...</span>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              onClick={modalOpenClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </UploadTitle>
        </ShareBar>
        <Timeline />
      </ShareWrapper>
    </UploadModal>
  );
}
