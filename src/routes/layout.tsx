import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 400px;
  background-color: #fff;
  box-shadow: 0 -5px 5px -5px;
  z-index: 1000;
`;

const Menu = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const MenuItem = styled.div``;

export default function Layout() {
  return (
    <>
      <Outlet />
      <LayoutWrapper>
        <Menu>
          <MenuItem>
            <NavLink
              to="/layout/search"
              style={({ isActive }) =>
                isActive ? { color: "darkorange" } : { color: "black" }
              }
            >
              <svg
                width="30"
                height="30"
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkorange" } : { color: "black" }
              }
              to="/layout/share"
            >
              <svg
                width="30"
                height="30"
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
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkorange" } : { color: "black" }
              }
              to="/layout/chat"
            >
              <svg
                width="30"
                height="30"
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
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                ></path>
              </svg>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkorange" } : { color: "black" }
              }
              to="/layout/profile"
            >
              <svg
                width="30"
                height="30"
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
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </NavLink>
          </MenuItem>
        </Menu>
      </LayoutWrapper>
    </>
  );
}
