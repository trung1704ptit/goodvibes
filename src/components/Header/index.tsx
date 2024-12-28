"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Menu, Drawer, Button, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import logoImg from "../../../public/logo.png";
import Link from "next/link";
import { menus } from "@/utils/constants";

const menuItems = [
  { key: "1", label: <Link href="/">Home</Link> },
  { key: "2", label: <Link href="/services">Services</Link> },
  { key: "3", label: <Link href="/contact">Contact Us</Link> },
  { key: "4", label: <Link href="/careers">Careers</Link> },
];

const AppHeader: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle Drawer
  const toggleDrawer = useCallback(() => {
    setDrawerVisible(!drawerVisible);
  }, [drawerVisible]);

  // Update `isMobile` state based on screen width
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setDrawerVisible(false); // Close drawer when resizing to desktop
    }
  };

  useEffect(() => {
    handleResize(); // Initialize on load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuMobileItem = useMemo(() => menus.map((item) => {
    return (
      <Link href={item.path} key={item.path} onClick={toggleDrawer}>
        {item.name}
      </Link>
    );
  }), [toggleDrawer]);

  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={logoImg} width={180} height={48} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex justify-end w-full pl-6">
            <Menu
              mode="horizontal"
              className="bg-transparent border-none w-full text-lg"
              items={menuItems} // Use the items prop instead of children
            />
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            className="md:hidden"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
          />
        )}
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <Link href={"/"}>
            <Image src={logoImg} width={180} height={48} alt="logo" />
          </Link>
        }
        placement="right"
        onClose={toggleDrawer}
        open={drawerVisible}
        className="md:hidden"
      >
        <List
          size="large"
          dataSource={menuMobileItem}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Drawer>
    </header>
  );
};

export default AppHeader;
