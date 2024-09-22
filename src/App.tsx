import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./routes/layout";
import Home from "./routes/home";
import Search from "./routes/search";
import Share from "./routes/share";
import Chat from "./routes/chat";
import { useEffect, useState } from "react";
import Profile from "./routes/profile";
import ProtectRoute from "./components/protectd-route";
import { auth } from "./firebase";
import LoadingScreen from "./components/loading-screen";
import CreateAccount from "./routes/create-account";
import Login from "./routes/login";
import ChatRoom from "./routes/chatRoom";
import NotFound from "./components/notFound";
import ProtecedChatRoom from "./components/protectd-chatRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/layout",
    element: (
      <ProtectRoute>
        <Layout />
      </ProtectRoute>
    ),
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "share",
        element: <Share />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/chatRoom/:id",
    element: (
      <ProtecedChatRoom>
        <ChatRoom />
      </ProtecedChatRoom>
    ),
  },
  {
    path: "notFound",
    element: <NotFound />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
       --vh: 100%;
  }
  * {
    box-sizing: border-box;
  }
  body {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    init();
    setScreenSize();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
