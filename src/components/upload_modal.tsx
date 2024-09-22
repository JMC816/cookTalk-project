import React, { useState } from "react";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ModalWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

const ModalBg = styled.div`
  width: 400px;
  height: 100%;
  z-index: 999;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalView = styled.div`
  width: auto;
  height: 70%;
  margin: 40px;
  padding: 10px;
  border-radius: 20px;
  background-color: gray;
  display: flex;
  flex-direction: column;
`;

const ModalCloseBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 40px;
  svg {
    cursor: pointer;
  }
`;

const UploadDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const UploadPhoto = styled.label`
  width: 280px;
  height: 280px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const UploadPhotoInput = styled.input`
  display: none;
`;

const Uploadpost = styled.textarea`
  width: 280px;
  height: 40px;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  padding: 10px;
`;

const UploadBtn = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 15px;
  border: none;
  background-color: darkorange;
  cursor: pointer;
`;

export default function UploadModal({
  children,
  setModal,
  modal,
}: {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}) {
  const modalCloseClick = () => {
    setModal((prev) => !prev);
  };
  const [file, setFile] = useState<File | null>(null);
  const [post, setPost] = useState("");
  const user = auth.currentUser;
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user || post == "" || post.length > 180) return;
    try {
      const doc = await addDoc(collection(db, "uploads"), {
        post,
        createAt: Date.now(),
        username: user.displayName || "unknown",
        userId: user.uid,
      });
      if (file) {
        const loactionRef = ref(storage, `uploads/${user.uid}/${doc.id}`);
        const result = await uploadBytes(loactionRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          photo: url,
        });
      }
      setPost("");
      setFile(null);
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };
  return (
    <ModalWrapper>
      <ModalBg style={modal ? { display: "none" } : {}}>
        <ModalView>
          <ModalCloseBtn onClick={modalCloseClick}>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </ModalCloseBtn>
          <UploadDetailWrapper>
            <UploadForm onSubmit={onSubmit}>
              <>
                <UploadPhoto htmlFor="file">
                  {file ? "사진 업로드 완료" : "사진을 업로드 해주세요"}
                </UploadPhoto>
                <UploadPhotoInput
                  onChange={onFileChange}
                  type="file"
                  id="file"
                  accept="image/*"
                />
                <Uploadpost
                  rows={5}
                  maxLength={180}
                  value={post}
                  onChange={onChange}
                />
              </>
              <UploadBtn onClick={modalCloseClick}>업로드</UploadBtn>
            </UploadForm>
          </UploadDetailWrapper>
        </ModalView>
      </ModalBg>
      {children}
    </ModalWrapper>
  );
}
