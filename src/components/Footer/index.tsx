"use client";

import React from "react";
import { Layout, Space } from "antd";
import Link from "next/link";
import { Row, Col } from "antd";
import Image from "next/image";
import { menus } from "@/utils/constants";
import LogoIcon from "../../../public/logo.png";


const Footer: React.FC = () => {
  return (
    <Layout.Footer className="bg-slate-900 text-white p-6 md:py-11">
      <div className="max-w-7xl mx-auto">
        <Row justify="space-between" align="middle">
          <Col>
            <Link href="/">
              <Image src={LogoIcon} width={180} height={48} alt="logo" />
            </Link>
          </Col>
          <Col className="text-lg mt-4">
            <Space size={"large"}>
              {menus.map((item) => {
                return (
                  <Link href={item.path} key={item.path}>
                    {item.name}
                  </Link>
                );
              })}
            </Space>
          </Col>
        </Row>
        <Row justify="center" className="mt-5">
          <Col>
            <span>&copy; 2024 Your Company. All Rights Reserved.</span>
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
