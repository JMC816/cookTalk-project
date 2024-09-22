import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  where,
} from "firebase/firestore";
import styled from "styled-components";
import { db } from "../firebase";
import { useEffect, useRef, useState } from "react";
import Message from "./message";
import { useParams } from "react-router-dom";

const MessageWrapper = styled.div`
  width: 400px;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: auto;
  padding: 0 10px;
`;

const MessageScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 60px;
  word-break: break-all;
`;

export interface MessagesProps {
  message: string;
  createAt: number;
  username: string;
  userId: string;
  id: string;
  chatRoomValue: {
    userId: string;
    postUserId: string;
  };
}

export default function Messages() {
  const { id } = useParams();
  const [messages, setMessages] = useState<MessagesProps[]>([]);
  const messageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchMessages = async () => {
      const messagesQeury = query(
        collection(db, "messages"),
        orderBy("createAt", "asc"),
        where("chatRoomValue.chatRoomId", "==", id)
      );
      unsubscribe = await onSnapshot(messagesQeury, (snapshot) => {
        const message = snapshot.docs.map((doc) => {
          const { message, createAt, username, userId, chatRoomValue } =
            doc.data();
          return {
            message,
            createAt,
            username,
            userId,
            chatRoomValue,
            id: doc.id,
          };
        });
        setMessages(message);
      });
    };
    fetchMessages();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const scrollToBottom = () => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <MessageWrapper>
      <MessageScroll>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
        <div ref={messageRef} />
      </MessageScroll>
    </MessageWrapper>
  );
}
