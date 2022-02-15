import React from "react";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Dropdowns() {
  return (
    <div>
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item icon={<DownOutlined />}>
          <a target="_blank" rel="noopener noreferrer" href="/">
            2nd menu item (disabled)
          </a>
        </Menu.Item>
        <Menu.Item disabled>
          <a target="_blank" rel="noopener noreferrer" href="/">
            3rd menu item (disabled)
          </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
      </Menu>
    </div>
  );
}
