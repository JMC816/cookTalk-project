import styled from "styled-components";
import { ChatRoomsProps } from "../routes/chat";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const ChatRoomsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 390px;
  height: 60px;
  background-color: darkorange;
  font-size: 10px;
  padding: 0 20px;
  &:hover {
    filter: brightness(90%);
  }
  cursor: pointer;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ChatRoomName = styled.div`
  font-size: 15px;
`;

const ChatRoomPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChatRoomTime = styled.div``;

export default function ChatRooms({
  postUserId,
  createAt,
  userId,
  chatRoomId,
  username,
  currentUserName,
}: ChatRoomsProps) {
  const time = () => {
    const start = new Date(createAt);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return "방금 전";

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    return `${start.toLocaleDateString()}`;
  };
  const navigate = useNavigate();
  const user = auth.currentUser?.displayName;
  const onMoveChatRoom = () => {
    const user = auth.currentUser;
    if (user?.uid === postUserId || user?.uid === userId) {
      navigate(`/chatRoom/${chatRoomId}`, {
        state: { postUserId, userId, chatRoomId },
      });
    }
  };
  const [profile, setProfile] = useState("");
  const img = async () => {
    const upload = await getDownloadURL(
      ref(
        storage,
        `avatar/${auth.currentUser?.uid === postUserId ? userId : postUserId}-${
          user === username ? currentUserName : username
        }/${auth.currentUser?.uid === postUserId ? userId : postUserId}`
      )
    );
    setProfile(upload);
  };
  useEffect(() => {
    img;
  }, []);
  return (
    <ChatRoomsWrapper onClick={onMoveChatRoom}>
      <Profile>
        {profile ? (
          <ChatRoomPhoto src={profile} />
        ) : (
          <svg
            width={35}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
        )}
        <ChatRoomName>
          {user === username ? currentUserName : username}
        </ChatRoomName>
      </Profile>
      <ChatRoomTime>{time()}</ChatRoomTime>
    </ChatRoomsWrapper>
  );
}
