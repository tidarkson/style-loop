import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utilities/firebase/Firebase.utils";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User.context";
import { Button, Col, Form, Input, Row } from "antd";
import { Icon } from "@iconify/react";

function SignIn() {
  // const { setCurrentUser, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    if (user === null) {
      alert("User not found, please sign up first.");
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (formValues) => {
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(formValues);

      if (user === null) {
        alert("User not found, please sign up first.");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <Text >Sign In to access our collections</Text> */}
      <Row
        gutter={[16, 16]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
        }}
      >
        <Button
          icon={<Icon icon="flat-color-icons:google" width={20} />}
          onClick={signInGoogleUser}
        >
          Sign In With Google
        </Button>
        <Button
          icon={
            <Icon icon="cib:gmail" style={{ color: "#f23f3f" }} width={20} />
          }
        >
          Sign In With Email
        </Button>
      </Row>
      <Form className="mt-4" layout="vertical" onFinish={handleSubmit}>
        <Row justify="center" align="middle">
          <Col span={24} className="text-center">
            <Form.Item
              name="email"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  // message: "Please input your email!",
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:user-broken" width={14} />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  // message: "Please input your password!",
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:lock-password-broken" width={14} />}
                placeholder="Password"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Button
            style={{
              width: "100%",
              backgroundColor: "#003049",
              color: "#ffffff",
            }}
            color="#ffffff"
            htmlType="submit"
          >
            Sign In
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default SignIn;
