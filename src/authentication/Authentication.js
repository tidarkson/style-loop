import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ConfigProvider, Space } from "antd";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TabList from "./TabList.json";

const Authentication = (props) => {
  const navigate = useNavigate();
  const [activeTabKey, setActiveTabKey] = useState("signIn");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const tabListContent = {
    signIn: <SignIn />,
    signUp: <SignUp />,
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#778da9",
          borderRadius: 10,
          colorBorder: "#e9ecef",
          colorText: "#0d1b2a",
          fontFamily: "Ubuntu Mono, monospace;",

          // Alias Token
          colorBgContainer: "#f8f9fa",
        },
        components: {
          Button: {
            contentFontSize: 12,
          },
          Input: {
            inputFontSize: 12,
          },
        },
      }}
    >
      <Space className="flex items-center justify-center h-screen">
        <Card
          style={{
            width: "105%",
            margin: "auto",
            padding: 20,
          }}
          title={
            activeTabKey === "signIn"
              ? "Welcome To Style Loop"
              : "Create An Account"
          }
          tabList={TabList}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
          tabProps={{
            size: "middle",
          }}
        >
          {tabListContent[activeTabKey]}
        </Card>
      </Space>
    </ConfigProvider>
  );
};

export default Authentication;
