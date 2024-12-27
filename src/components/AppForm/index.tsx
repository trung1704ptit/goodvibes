'use client';

import React from "react";
import { Form, Input, Button, Card } from "antd";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  description: string;
}

export default function AppForm() {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        className="w-full max-w-lg shadow-lg rounded-xl p-2 bg-white m-3"
        bordered={false}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your name!" },
              { min: 3, message: "Name must be at least 3 characters!" },
            ]}
          >
            <Input placeholder="Enter your name" size="large" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                pattern: /^\d{10}$/,
                message: "Enter a valid 10-digit phone number!",
              },
            ]}
          >
            <Input placeholder="Enter your phone number" size="large" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please provide a description!" }]}
          >
            <Input.TextArea placeholder="Enter a description" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
