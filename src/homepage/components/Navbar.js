import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Announcement from "./Announcement";
import { UserContext } from "../../contexts/User.context";
import { signOutUser } from "../../utilities/firebase/Firebase.utils";
import Title from "antd/es/typography/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, ConfigProvider } from "antd";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out user:", error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#0c6fff",
          borderRadius: 10,
          colorBorder: "#e9ecef",
          colorText: "#0d1b2a",
          fontFamily: "Cabinet Grotesk, sans-serif;",

          // Alias Token
          colorBgContainer: "#f8f9fa",
        },
        components: {
          Button: {
            contentFontSize: 12,
            defaultHoverColor: "#0c6fff"
          }
        },
      }}
    >
      <Announcement />
      <div className="px-3 md:px-10 py-5 flex items-center justify-between">
        <div className="cursor-pointer flex items-center gap-1">
          <Icon
            icon="streamline-freehand-color:e-commerce-online-shop"
            width={24}
          />
          <Title level={3} style={{ margin: "0px 0px 0px 0px" }}>
            Thrift<span style={{color:"#0c6fff"}}>Vibe</span>
          </Title>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-5 md:px-2">
            <li className="tracking-widest cursor-pointer font-semibold">
              Collections
            </li>
            <li className="tracking-widest cursor-pointer font-semibold">
              Featured
            </li>
          </ul>
        </div>

        <article className="flex items-center gap-3">
          <ul className="flex flex-col md:flex-row items-center md:gap-3">
            {currentUser ? (
              <li>
                <Button onClick={handleSignOut} className="button-class" style={{}}>Sign Out</Button>
              </li>
            ) : (
              <li>
                <Button onClick={() => navigate("/auth")}>Sign In</Button>
              </li>
            )}
          </ul>
          <Icon icon="solar:cart-large-minimalistic-line-duotone" width={24} className="cursor-pointer "/>
        </article>
      </div>
      <Outlet />
    </ConfigProvider>
  );
}

export default Navbar;
