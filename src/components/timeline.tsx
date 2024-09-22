import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import Post from "./post";

export interface PostProp {
  id: string;
  photo?: string;
  post: string;
  userId: string;
  username: string;
  createAt: number;
}

const Wrapper = styled.div`
  width: 350px;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export default function Timeline() {
  const [post, setPost] = useState<PostProp[]>([]);
  const fetchPosts = async () => {
    const postsQuery = query(
      collection(db, "uploads"),
      orderBy("createAt", "desc")
    );
    const spanshot = await getDocs(postsQuery);
    const posts = spanshot.docs.map((doc) => {
      const { post, createAt, username, userId, photo } = doc.data();
      return { post, createAt, username, userId, photo, id: doc.id };
    });
    setPost(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Wrapper>
      {post.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
}
