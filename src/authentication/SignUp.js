import { Button, Col, Form, Input, Row, Typography } from "antd";
import { Icon } from "@iconify/react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../utilities/firebase/Firebase.utils";

function SignUp() {
  const { Title, Text } = Typography;
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const onSubmit = async (formValues) => {
    // Here you can handle the form submission, e.g., send data to your backend
    const { displayName, phoneNumber } = formValues;

    // Check if passwords match
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(formValues);
      await createUserDocumentFromAuth(user, { displayName, phoneNumber });
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
          gap: 30,
        }}
      >
        <Button
          icon={<Icon icon="flat-color-icons:google" width={20} />}
          onClick={logGoogleUser}
        >
          Sign Up With Google
        </Button>
        <Button
          icon={
            <Icon icon="cib:gmail" style={{ color: "#f23f3f" }} width={20} />
          }
        >
          Sign Up With Email
        </Button>
      </Row>
      <Form className="mt-4" layout="vertical" onFinish={onSubmit}>
        <Row justify="center" align="middle">
          <Col span={12} className="text-center" style={{ padding: "0px 8px" }}>
            <Form.Item
              name="displayName"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:user-broken" width={14} />}
                placeholder="First Name"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="text-center" style={{ padding: "0px 8px" }}>
            <Form.Item
              name="lastName"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:user-broken" width={14} />}
                placeholder="Last Name"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={12} className="text-center" style={{ padding: "0px 8px" }}>
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
                prefix={<Icon icon="clarity:email-line" width={14} />}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="text-center" style={{ padding: "0px 8px" }}>
            <Form.Item
              name="phoneNumber"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:phone-broken" width={14} />}
                placeholder="Phone Number"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={12} className="text-center" style={{ padding: "0px 8px" }}>
            <Form.Item
              name="password"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:lock-password-broken" width={14} />}
                placeholder="Password"
                type="password"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="text-center" style={{ padding: "0px 8px" }}>
            <Form.Item
              name="confirmPassword"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<Icon icon="solar:lock-password-broken" width={14} />}
                placeholder="Confirm Password"
                type="password"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Button
            style={{
              width: "96%",
              backgroundColor: "#003049",
              color: "#ffffff",
            }}
            htmlType="submit"
            type="primary"
            color="#ffffff"
          >
            Create Account
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default SignUp;
