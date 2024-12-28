"use client";

import React, { useState } from "react";
import { Form, Input, Card, Result, Button } from "antd";

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
    }, 3000); // Simulated delay
  };

  const resetForm = () => {
    form.resetFields();
    setIsSubmitted(false);
  };

  return (
    <div className="flex justify-center items-start pt-12 min-h-screen bg-gray-100">
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
                <button
                  className={`w-full text-white px-4 h-12 text-lg rounded-md transition ${
                    loading
                      ? "bg-blue-300 cursor-not-allowed opacity-50"
                      : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <Result
            status="success"
            title="Submission Successful!"
            subTitle="Thank you for contacting us. We will get back to you shortly."
            extra={[
              <Button type="primary" key="reset" onClick={resetForm}>
                Give us an other message
              </Button>,
            ]}
          />
        )}
      </Card>
    </div>
  );
}
