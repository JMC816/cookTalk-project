import React, { useState } from "react";
import styled from "styled-components";
import Messages from "../components/messages";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useLocation } from "react-router-dom";

const ChatRoomWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

const ChatBtn = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 60px;
  background-color: darkorange;
  position: fixed;
  bottom: 0;
  gap: 20px;
`;

const ChatInput = styled.input`
  border: none;
  border-radius: 20px;
  width: 300px;
  height: 40px;
  padding-left: 20px;
`;

const ChatInputIcon = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  svg {
    height: 35px;
  }
`;

export default function ChatRoom() {
  const location = useLocation();
  const chatRoomValue = location.state;
  const [message, setMessage] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || message == "") return;
    try {
      await addDoc(collection(db, "messages"), {
        message,
        createAt: Date.now(),
        username: user?.displayName,
        userId: user.uid,
        chatRoomValue,
      });
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ChatRoomWrapper>
      <Messages />
      <ChatBtn onSubmit={onSubmit}>
        <ChatInput
          placeholder="메세지를 입력하세요."
          onChange={onChange}
          value={message}
        />
        <ChatInputIcon>
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
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            ></path>
          </svg>
        </ChatInputIcon>
      </ChatBtn>
    </ChatRoomWrapper>
  );
}
