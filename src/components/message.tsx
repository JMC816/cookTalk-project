import styled from "styled-components";
import { MessagesProps } from "./messages";
import { auth } from "../firebase";

const MessageWrapper = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 10px;
`;

const MessageTime = styled.div`
  display: flex;
  font-size: 10px;
  width: 40px;
`;

const Messager = styled.div`
  font-size: 15px;
`;

const MessageContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0 10px;
  height: 40px;
  background-color: #fff;
`;

export default function Message({
  message: msg,
  createAt,
  username,
  userId: currentUser,
}: MessagesProps) {
  const date = new Date(createAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const user = auth.currentUser;
  const isUserMessage = currentUser === user?.uid;

  return (
    <>
      {isUserMessage ? (
        <MessageWrapper
          style={
            currentUser === user?.uid
              ? { justifyContent: "end" }
              : { justifyContent: "start" }
          }
        >
          <MessageTime
            style={
              currentUser === user.uid
                ? { justifyContent: "end" }
                : { justifyContent: "start" }
            }
          >
            {hours + ":" + minutes}
          </MessageTime>
          <MessageContent
            style={
              currentUser === user.uid
                ? { backgroundColor: "darkorange", color: "#fff" }
                : { backgroundColor: "#fff" }
            }
          >
            {msg}
          </MessageContent>
        </MessageWrapper>
      ) : (
        <>
          <Messager>{username}</Messager>
          <MessageWrapper
            style={
              currentUser !== user?.uid
                ? { justifyContent: "start" }
                : { justifyContent: "end" }
            }
          >
            <MessageContent
              style={
                currentUser !== user?.uid
                  ? { backgroundColor: "#fff" }
                  : { backgroundColor: "darkorange", color: "#fff" }
              }
            >
              {msg}
            </MessageContent>
            <MessageTime
              style={
                currentUser !== user?.uid
                  ? { justifyContent: "start" }
                  : { justifyContent: "end" }
              }
            >
              {hours + ":" + minutes}
            </MessageTime>
          </MessageWrapper>
        </>
      )}
    </>
  );
}
