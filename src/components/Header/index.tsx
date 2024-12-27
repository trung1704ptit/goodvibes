'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const AppHeader: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { key: '1', label: <a href="#home">Home</a> },
    { key: '2', label: <a href="#about">About</a> },
    { key: '3', label: <a href="#services">Services</a> },
    { key: '4', label: <a href="#contact">Contact</a> },
  ];

  // Toggle Drawer
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  // Update `isMobile` state based on screen width
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setDrawerVisible(false); // Close drawer when resizing to desktop
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Initialize on load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyApp</div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="hidden md:flex space-x-6">
            <Menu
              mode="horizontal"
              items={menuItems}
              className="bg-transparent border-none"
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

      {/* Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          className="bg-transparent"
        />
      </Drawer>
    </header>
  );
};

export default AppHeader;
