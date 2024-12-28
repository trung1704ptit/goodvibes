"use client";

import React, { useState } from "react";
import { Form, Input, Card, Result, Button } from "antd";
import Link from "next/link";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function AppForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values: FormValues) => {
    console.log("Form submitted:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-start py-12 bg-gray-100 fade-in-up">
      <Card
        className="w-full max-w-lg shadow-lg rounded-xl p-2 bg-white m-3"
        bordered={false}
      >
        {!isSubmitted ? (
          <>
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
                  className="h-12"
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
                  className="h-12"
                />
              </Form.Item>

              <Form.Item
                label="Contact"
                name="phone"
                validateTrigger={["onBlur"]}
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  { min: 8, message: "Enter a valid phone number!" },
                ]}
              >
                <Input
                  placeholder="Enter your phone number"
                  size="large"
                  className="h-12"
                />
              </Form.Item>

              <Form.Item label="Message" name="message">
                <Input.TextArea
                  placeholder="Enter a message"
                  rows={5}
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full shadow-none"
                  disabled={loading}
                  loading={loading}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <Result
            status="success"
            title="Submission Successful!"
            subTitle="Thank you for contacting us. We will get back to you shortly."
            extra={[
              <Link href={"/"} key="back">
                <Button type="primary" className="shadow-none">
                  Go Home Page
                </Button>
              </Link>,
            ]}
          />
        )}
      </Card>
    </div>
  );
}
