"use client";

import React from "react";
import { Form, Input, Button } from "antd";

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
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Please input your name!" },
          { min: 3, message: "Name must be at least 3 characters!" },
        ]}
      >
        <Input placeholder="Enter your name" />
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
        <Input placeholder="Enter your phone number" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please provide a description!" }]}
      >
        <Input.TextArea placeholder="Enter a description" rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
