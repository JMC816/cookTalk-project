import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Navigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import LoadingScreen from "./loading-screen";

export default function ProtecedChatRoom({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  const [state, setState] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const fetchChatRooms = async () => {
    const chatRoomsQuery = query(
      collection(db, "chatRoom"),
      orderBy("createAt", "desc")
    );
    const spanshot = await getDocs(chatRoomsQuery);
    const chatRooms = spanshot.docs
      .map((doc) => {
        const { postUserId, createAt, postId, userId } = doc.data();
        if (user?.uid === postUserId || user?.uid === userId)
          return {
            postUserId,
            createAt,
            postId,
            userId,
            chatRoomId: doc.id,
          };
        return null;
      })
      .filter((prev) => prev !== null);
    const authorized = chatRooms.some(
      (room) => user?.uid === room.postUserId || user?.uid === room.userId
    );
    setIsAuthorized(authorized);
    setState(false);
  };
  useEffect(() => {
    fetchChatRooms();
  }, []);

  if (state) {
    return <LoadingScreen />;
  }
  if (!isAuthorized) {
    return <Navigate to="/notFound" />;
  }
  return children;
}
