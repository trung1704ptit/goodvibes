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
    <Layout.Footer className="bg-[#252641] text-white p-6 md:py-11">
      <div className="container mx-auto">
        <Row justify="space-between" align="middle">
          <Col>
            <Link href="/">
              <Image src={LogoIcon} width={100} height={100} alt="logo" />
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
            <div className="flex items-center text-gray-400 text-sm justify-center mb-3">
              <Link href="/careers" className="pr-3">
                Careers
              </Link>
              <Link href="" className="border-l border-gray-400 px-3">
                Privacy
              </Link>
              <Link href="" className="border-l border-gray-400 pl-3">
                Terms &amp; Conditions
              </Link>
            </div>
            <span>
              &copy; 2025 Good Vibes IT Solutions. All Rights Reserved.
            </span>
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
