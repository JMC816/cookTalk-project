import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import GoogleButton from "../components/google-btn";
import GithubButton from "../components/github-btn";

const CreatAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
`;

const CreateAccountView = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background-color: #c9b88d;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
`;

const Button = styled.button`
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: darkorange;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
`;

const Login = styled.span`
  font-size: 15px;
  color: black;
`;

export default function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (name === "" || email === "" || password === "") {
      return;
    }
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, {
        displayName: name,
      });
      navigate("/login");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    }
  };
  return (
    <CreatAccountWrapper>
      <CreateAccountView onSubmit={onSubmit}>
        <Input
          name="name"
          value={name}
          onChange={onChange}
          type="text"
          placeholder="이름을 입력하세요."
          required
        />
        <Input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="이메일을 입력하세요."
          required
        />
        <Input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="비밀번호를 입력하세요."
          required
        />
        <Button>회원가입</Button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Login>이미 계정이 있으신가요?</Login>
        </Link>
        {error !== "" ? error : null}
      </CreateAccountView>
      <GoogleButton />
      <GithubButton />
    </CreatAccountWrapper>
  );
}
