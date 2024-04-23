import { useState } from "react";
import "./DashboardLayout.scss";
import {
  Avatar,
  Divider,
  Flex,
  Input,
  Popover,
  Select,
  Typography,
} from "antd";
import logo from "../assets/logo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  LoginOutlined,
  AppstoreOutlined,
  FundViewOutlined,
  StarOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  GlobalOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  InfoCircleOutlined,
  CheckSquareOutlined,
  MailTwoTone,
  MailOutlined,
  FilePdfOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import profileImg from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

function DashboardLayout({ children, title }) {
  const [currLanguage, setCurrLanguage] = useState("English");
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const languages = [
    {
      value: "English",
      label: "English",
    },
    {
      value: "Spanish",
      label: "Spanish",
    },
    {
      value: "Hindi",
      label: "Hindi",
    },
  ];

  const navItems = [
    {
      key: "/",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
    },
    {
      key: "/service",
      icon: <FundViewOutlined />,
      label: "Service jobs",
    },
    {
      key: "/invoice",
      icon: <FileTextOutlined />,
      label: "Invoices",
    },
    {
      key: "/customers",
      icon: <ShoppingCartOutlined />,
      label: "Customers",
    },
    {
      key: "/products",
      icon: <StarOutlined />,
      label: "products",
    },
    {
      key: "/offer",
      icon: <StarOutlined />,
      label: "Offered Services",
    },
    {
      key: "/parts",
      icon: <StarOutlined />,
      label: "Parts",
    },
    {
      key: "/enquiries",
      icon: <InfoCircleOutlined />,
      label: "Enquiries",
    },
    {
      key: "/users",
      icon: <UsergroupAddOutlined />,
      label: "Users",
    },
    {
      key: "/permission",
      icon: <CheckSquareOutlined />,
      label: "Permission",
    },
    {
      key: "/role",
      icon: <UserOutlined />,
      label: "Role",
    },
    {
      key: "/email-templates",
      icon: <MailOutlined />,
      label: "Email Template",
    },
    {
      key: "/pdf-templates",
      icon: <FilePdfOutlined />,
      label: "Pdf Templates",
    },
    {
      key: "/theming",
      icon: <PictureOutlined />,
      label: "Theming",
    },
    {
      key: "/payment-gateway",
      icon: <StarOutlined />,
      label: "Payment Gateway",
    },
    {
      key: "/backup",
      icon: <StarOutlined />,
      label: "Backup",
    },
    {
      key: "/configuration",
      icon: <StarOutlined />,
      label: "Configuration",
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  const profileInfo = (
    <Flex gap={8} vertical className="profilePopover ">
      <Flex gap={12} align="center">
        <Avatar size={35} src={profileImg} className="popoverProfileImg" />
        <Flex vertical>
          <Flex vertical gap={2}>
            <p className="popoverProfileUsername">User124574</p>
            <p className="popoverProfileUserId">User</p>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <div>
        <Button
          className="logoutButton"
          type="primary"
          icon={<LoginOutlined />}
        >
          Sign out
        </Button>
      </div>
    </Flex>
  );

  return (
    <Layout className="dashboardWrapper">
      <Header className="dashboardHeader">
        <Flex
          justify="space-between"
          align="center"
          className="dashboardHeaderContent"
        >
          <Flex gap={8}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="dashboardHeaderLeftBtn"
            />
            <img src={logo} alt="Logo" className="logo" />
          </Flex>
          <Flex align="center" gap={8}>
            <Button
              className="headerRightBtn"
              type="primary"
              icon={<FileTextOutlined />}
            >
              Documentation
            </Button>

            <div className="headerRightSelectWrapper">
              <GlobalOutlined />
              <Select
                className="headerRightselect"
                onChange={(value) => {
                  setCurrLanguage(value);
                }}
                options={languages}
                value={currLanguage}
                variant="borderless"
                size="middle"
              />
            </div>
            <Popover placement="bottomLeft" content={profileInfo}>
              <Avatar src={profileImg} className="profile" />
            </Popover>
          </Flex>
        </Flex>
      </Header>
      <Layout>
        <Sider
          className="sideBar"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            className="menuLists"
            theme="light"
            mode="vertical"
            defaultSelectedKeys={["/"]}
            items={navItems}
            onClick={(item) => {
              navigate(item.key);
            }}
          />
        </Sider>

        <Layout
          className="dashboardMainContentWrapper"
          style={{
            marginLeft: !collapsed ? 200 : 100,
          }}
        >
          <Header className="dashboardMainContentHeader">
            <h1 className="dashboardMainContentTitle">{title}</h1>
          </Header>
          <Content className="dashboardMainContent">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
