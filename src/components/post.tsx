import styled from "styled-components";
import { PostProp } from "./timeline";
import { auth, db, storage } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 500px;
  margin: 10px 0;
  border-radius: 5px;
  overflow-y: scroll;
`;

const PostPohto = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const PostWrite = styled.div`
  width: 300px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  word-wrap: break-word;
  margin-bottom: 10px;
`;

const PostDate = styled.span`
  width: 300px;
  height: 20px;
  margin: 10px 0;
`;

const PostUser = styled.span`
  height: 20px;
  width: 300px;
`;

const PostBar = styled.div`
  width: 300px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 40px;
    width: 40px;
  }
`;

export default function Post({
  createAt,
  username,
  photo,
  post,
  userId,
  id,
}: PostProp) {
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("게시물을 삭제하시겠습니까?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "uploads", id));
      if (photo) {
        const photoRef = ref(storage, `uploads/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onCreateChatRoom = async () => {
    const user = auth.currentUser;
    if (user?.uid == userId) return;
    try {
      const chatRoomQuery = query(
        collection(db, "chatRoom"),
        where("postUserId", "==", userId),
        where("postId", "==", id),
        where("userId", "==", user?.uid)
      );
      const querySnapshot = await getDocs(chatRoomQuery);
      if (querySnapshot.empty) {
        await addDoc(collection(db, "chatRoom"), {
          postUserId: userId,
          createAt: Date.now(),
          postId: id,
          userId: user?.uid,
          username,
          currentUserName: user?.displayName,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

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
  return (
    <Wrapper>
      <PostBar>
        <PostUser>{username}</PostUser>
        <svg
          style={{ cursor: "pointer" }}
          onClick={onCreateChatRoom}
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
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          ></path>
        </svg>
        {user?.uid === userId ? (
          <svg
            style={{ cursor: "pointer" }}
            onClick={onDelete}
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
        ) : null}
      </PostBar>
      {photo ? <PostPohto src={photo} /> : <PostPohto />}
      <PostDate>{time()}</PostDate>
      <PostWrite>{post}</PostWrite>
    </Wrapper>
  );
}
