import { useNavigate } from "react-router-dom";
import { auth, storage } from "../firebase";
import styled from "styled-components";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
  gap: 20px;
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

const AvatarUpload = styled.label`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 90px;
  overflow: hidden;
  svg {
    width: 50px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
`;

const AvatarInput = styled.input`
  display: none;
`;

const Avatar = styled.div`
  width: 400px;
  font-size: 20px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AvatarName = styled.span``;

const AvatarLogOut = styled.span`
  font-size: 15px;
  background-color: darkorange;
  padding: 10px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  &:active {
    filter: brightness(90%);
  }
`;

const AvatarEmail = styled.span`
  width: 400px;
  font-size: 20px;
  padding: 0 20px;
`;

export default function Profile() {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL);
  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(
        storage,
        `avatar/${user.uid}-${user.displayName}/${user.uid}`
      );
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };
  const naviate = useNavigate();
  const logOut = async () => {
    await auth.signOut();
    naviate("/login");
  };
  return (
    <ProfileWrapper>
      <ChatBar>프로필</ChatBar>
      <AvatarUpload htmlFor="avatar">
        {avatar ? (
          <AvatarImg src={avatar} />
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
        )}
      </AvatarUpload>
      <AvatarInput
        id="avatar"
        type="file"
        onChange={onAvatarChange}
        accept="image/*"
      />
      <Avatar>
        <AvatarName>이름 : {user?.displayName}</AvatarName>
        <AvatarLogOut onClick={logOut}>로그아웃</AvatarLogOut>
      </Avatar>
      <AvatarEmail>이메일 : {user?.email}</AvatarEmail>
    </ProfileWrapper>
  );
}
