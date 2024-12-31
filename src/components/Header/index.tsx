"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation"; // Import for current path
import { Menu, Drawer, Button, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { menus } from "@/utils/constants";
import logoImg from "../../../public/logo.png";


const AppHeader: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get the current path

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

  const menuItems = useMemo(
    () =>
      menus.map((item) => ({
        key: item.path,
        label: <Link href={item.path}>{item.name}</Link>,
      })),
    []
  );

  const menuMobileItems = useMemo(
    () =>
      menus.map((item) => (
        <Link href={item.path} key={item.path} onClick={toggleDrawer}>
          {item.name}
        </Link>
      )),
    [toggleDrawer]
  );

  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={logoImg} width={100} height={100} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex justify-end w-full pl-6">
            <Menu
              mode="horizontal"
              className="bg-transparent border-none w-full text-lg"
              items={menuItems} // Use the items prop instead of children
              selectedKeys={[pathname]} // Set the active menu item
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
            <Image src={logoImg}  width={100} height={100} alt="logo" />
          </Link>
        }
        placement="right"
        onClose={toggleDrawer}
        open={drawerVisible}
        className="md:hidden"
      >
        <List
          size="large"
          dataSource={menuMobileItems}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Drawer>
    </header>
  );
};

export default AppHeader;
