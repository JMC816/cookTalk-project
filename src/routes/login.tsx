import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import GoogleButton from "../components/google-btn";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fae6b1;
  height: calc(var(--vh, 1vh) * 100);
`;

const LoginView = styled.form`
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

const CreateAccoount = styled.span`
  font-size: 15px;
  color: black;
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (email === "" || password === "") {
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/layout/search");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    }
  };
  return (
    <LoginWrapper>
      <LoginView onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          type="text"
          placeholder="이메일을 입력하세요."
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <Button>로그인</Button>
        <Link to="/create-account" style={{ textDecoration: "none" }}>
          <CreateAccoount>계정이 없으신가요?</CreateAccoount>
        </Link>
        {error !== "" ? error : null}
      </LoginView>
      <GoogleButton />
    </LoginWrapper>
  );
}
