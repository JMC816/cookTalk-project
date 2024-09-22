import { collection, getDocs, orderBy, query } from "firebase/firestore";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import ChatRooms from "../components/chatRooms";

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: auto;
`;

const ChatRoomsWrapper = styled.div`
  margin-top: 65px;
`;

const ChatBar = styled.div`
  background-color: darkorange;
  width: 400px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  box-shadow: 0 5px 5px -5px black;
  font-size: 40px;
  color: #fff;
  font-family: "Dongle", sans-serif;
`;

export interface ChatRoomsProps {
  postUserId: string;
  createAt: number;
  postId: string;
  userId: string;
  chatRoomId: string;
  username: string;
  currentUserName: string;
}

export default function Chat() {
  const [chats, setChats] = useState<ChatRoomsProps[]>([]);
  const fetchChatRooms = async () => {
    const chatRoomsQuery = query(
      collection(db, "chatRoom"),
      orderBy("createAt", "desc")
    );
    const user = auth.currentUser;
    const snapshot = await getDocs(chatRoomsQuery);
    const chatRooms = snapshot.docs
      .map((doc) => {
        const {
          postUserId,
          createAt,
          postId,
          userId,
          username,
          currentUserName,
        } = doc.data();
        if (user?.uid === postUserId || user?.uid === userId)
          return {
            postUserId,
            createAt,
            postId,
            userId,
            chatRoomId: doc.id,
            username,
            currentUserName,
          };
        return null;
      })
      .filter((prev) => prev !== null);
    setChats(chatRooms);
  };
  useEffect(() => {
    fetchChatRooms();
  }, []);
  return (
    <ChatWrapper>
      <ChatBar>채팅방</ChatBar>
      <ChatRoomsWrapper>
        {chats.map((chat) => (
          <ChatRooms key={chat.chatRoomId} {...chat} />
        ))}
      </ChatRoomsWrapper>
    </ChatWrapper>
  );
}
