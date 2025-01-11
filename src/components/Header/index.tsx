"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation"; // Import for current path
import { Drawer, Button, List } from "antd";
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

  const menuMobileItems = useMemo(
    () =>
      menus.map((menu) => (
        <Link href={menu.path} key={menu.path} onClick={toggleDrawer}>
          {menu.name}
        </Link>
      )),
    [toggleDrawer]
  );

  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={logoImg} width={100} height={100} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <nav>
            <ul className="flex space-x-6">
              {menus.map((menu, index) => {
                const isActive = pathname === menu.path;
                return (
                  <li key={index}>
                    <Link href={menu.path}>
                      <span
                        className={`font-medium pb-3 text-lg ${
                          isActive
                            ? "text-primary border-b-2 border-[#17a2b7]"
                            : "hover:text-[#17a2b7]"
                        }`}
                      >
                        {menu.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
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
            <Image src={logoImg} width={100} height={100} alt="logo" />
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
          renderItem={(item) => (
            <List.Item>{item}</List.Item>
          )}
        />
      </Drawer>
    </header>
  );
};

export default AppHeader;
