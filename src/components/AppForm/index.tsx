"use client";

import React from "react";
import { Form, Input, Button, Card } from "antd";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function AppForm() {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        className="w-full max-w-lg shadow-lg rounded-xl p-2 bg-white m-3"
        bordered={false}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            validateTrigger={["onBlur"]}
            rules={[
              { required: true, message: "Please input your name!" },
              { min: 3, message: "Name must be at least 3 characters!" },
            ]}
          >
            <Input
              placeholder="Enter your name"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            validateTrigger={["onBlur"]}
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Contact"
            name="phone"
            validateTrigger={["onBlur"]}
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                min: 8,
                message: "Enter a valid phone number!",
              },
            ]}
          >
            <Input
              placeholder="Enter your phone number"
              size="large"
            />
          </Form.Item>

          <Form.Item label="Message" name="message">
            <Input.TextArea placeholder="Enter a message" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
              // style={{
              //   height: '48px',  // Custom height for the button
              //   fontSize: '16px', // Optional: customize font size
              //   padding: '0 16px', // Optional: adjust padding for the button's width
              // }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
