import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ConfigProvider, Space } from "antd";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TabList from "./TabList.json";
import Title from "antd/es/typography/Title";

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
            defaultHoverColor: "#0c6fff",
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
            activeTabKey === "signIn" ? (
              <Title level={5} style={{ margin: "0px 0px 0px 0px" }}>
               Welcome to Thrift<span style={{ color: "#0c6fff" }}>Vibe</span>
              </Title>
            ) : (
              "Create An Account"
            )
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
